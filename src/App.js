
import { useEffect, useState } from 'react';
import './App.css';
import {AdviceList} from './AdviceList';
import {AdviceActions} from './AdviceActions';

function App() {
  const quoteList = [
    {id : "1",name :"Keep up the good work!",state:"true"},
    {id : "2",name :"That was a nice try/good effort.",state:"true"},
    {id : "3",name :"That's a real improvement/you've really improved.",state:"true"},
    {id : "4",name :" You're on the right track.",state:"true"},
    {id : "5",name :"Don't give up!",state:"true"},
    {id : "6",name :"Come on, you can do it!",state:"true"}
  ];

  //get data localstorage or array object = state
  const [adviceList,setAdviceList] = useState(()=>{
    const data = JSON.parse(localStorage.getItem('adviceList'));
    return data ? data : quoteList;
  });

  //update localstorage khi advice changes
  useEffect(()=>{
    localStorage.setItem("adviceList",JSON.stringify(adviceList))
  },[adviceList]);
  



  //state favourites advice
  const [favouriteAdvice,setFavouriteAdvice] = useState(()=>{
    const data = JSON.parse(localStorage.getItem('favourites'))
    return data ? data : [];
  });
  //update localstorage khi favourite changes
  useEffect(()=>{
    localStorage.setItem("favourites",JSON.stringify(favouriteAdvice))
  },[favouriteAdvice]);

  //add favourite advice
  const addFavouriteAdvice = (advice)=>{
    if(!favouriteAdvice.find(item => item.id === advice.id)){
      setFavouriteAdvice([...favouriteAdvice,advice]);
    }
  };
  //remove favourite advice 
  const removeFavouriteAdvice = (id)=>{
    const temp = favouriteAdvice.filter(item => item.id !== id);
    setFavouriteAdvice(temp);
  }


  //state current random advice
  const [currentAdvice ,setCurrentAdvice] = useState(null);
  //Random advice in list
  const randomAdvice =()=>{
    const AdviceLength = adviceList.length;
    const indexAdvice = Math.floor(Math.random() * AdviceLength);
    return adviceList[indexAdvice];
  }
  const tempRandom = randomAdvice();
  //handle random advice gọi randomAdvice == state currentAdvice
  const handleRandomAdvice = ()=>{
    const tempRandom = randomAdvice();
    setCurrentAdvice(tempRandom);
  }

  return (
    <div className='card'>
      <AdviceList currentAdvice={currentAdvice} randomAdvice={tempRandom} />
      <AdviceActions randomAdvice={handleRandomAdvice}/>
    </div>
  );
}

export default App;
