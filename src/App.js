
import { useEffect, useState } from 'react';

import './App.css';
import {AdviceList} from './AdviceList';
import {AdviceActions} from './AdviceActions';
import {AdviceInput} from './AdviceInput';
import { FavoriteAdviceList } from './FavoriteAdviceList';

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

  //function add advice in Advicelist
  const addAdviceList = (newAdvice) => {
    const newAdvideObj = {
      id: (adviceList.length + 1).toString(),
      name: newAdvice,
      state:'true'
    };
    setAdviceList([...adviceList,newAdvideObj]);
  }
  //state store search advice
  const [adviceSearch,setAdviceSearch] = useState(()=>{
    const data = JSON.parse(localStorage.getItem("adviceSearch"));
    return data ? data : [];
  });
  //update localstorage advice search changes
  useEffect(()=>{
    localStorage.setItem("adviceSearch",JSON.stringify(adviceSearch));
  },[adviceSearch]);
  //function search advice in advicelist
  const searchAdviceList = (searchAdvice) => {
    const tmp = adviceList.filter(advice => advice.name.toLowerCase().includes(searchAdvice.toLowerCase()));
    setAdviceSearch(tmp);
  }
  //
  const favouriteAdvices = [
    {id: "1", name: "Keep up the good work!", state: "true"},
    {id: "2", name: "That was a nice try/good effort.", state: "true"},
  ];
  //state favourites advice
  const [favouriteAdvice, setFavouriteAdvice] = useState(() => {
    const data = JSON.parse(localStorage.getItem('favouriteAdvice'));
    return data ? data : favouriteAdvices;  // Khởi tạo là mảng rỗng nếu không có dữ liệu
  });
  //update localstorage khi favourite changes
  useEffect(()=>{
    localStorage.setItem("favouriteAdvice",JSON.stringify(favouriteAdvice));
  },[favouriteAdvice]);

  //state current random advice

  const [currentAdvice ,setCurrentAdvice] = useState(()=>{
    const data = JSON.parse(localStorage.getItem('currentAdvice'));
    return data ? data : [];
  });
  
  //update localstorage khi currentAdvice
  useEffect(()=>{
    localStorage.setItem("currentAdvice",JSON.stringify(currentAdvice));
  },[currentAdvice]);


  //Random advice in list
  const randomAdvice =()=>{
    if (adviceList.length === 0) {
      console.error('Advice list is empty');
      return null; // Hoặc trả về một giá trị mặc định
    }

    const AdviceLength = adviceList.length;
    const indexAdvice = Math.floor(Math.random() * AdviceLength);
    const advice = adviceList[indexAdvice];
    return advice;
  }
  
  //handle random advice gọi randomAdvice == state currentAdvice
  const handleRandomAdvice = ()=>{
    const tmpRandom = randomAdvice();
    setCurrentAdvice(tmpRandom);
  }
  

  //add favourite advice
  const addFavouriteAdvice = () => {
    if (currentAdvice) {
      if(favouriteAdvice.length === 0){
        setFavouriteAdvice(currentAdvice);
      }else{
        setFavouriteAdvice([...favouriteAdvice,currentAdvice]);
      }
        
    }else {
      console.log("Không có lời khuyên nào được chọn!");
    }
  };
  //remove favourite advice 
  const removeFavouriteAdvice = (id)=>{
    const temp = favouriteAdvice.filter(item => item.id !== id);
    setFavouriteAdvice(temp);
  }


  //even show favorites
  const [showFavorites,setShowFavorites] = useState(false);

  //function show list advice favorite
  const toggleFavorites = () =>{
    const temp = !showFavorites
    setShowFavorites(temp);
  }

  //even add and search advice
  const [showAdviceInput,setShowAdviceInput] = useState(false);
  //function button add advice
  const toggleAdviceInput = () => {
    const temp = !showAdviceInput;
    setShowAdviceInput(temp);
  }
  //even search input 
  const [showAdviceSearch,setShowAdviceSearch] = useState(false);
  const toggleAdviceSearch = () => {
    const temp = !showAdviceSearch;
    setShowAdviceSearch(temp);
  }

  //function share advice
  const handleShare = () => {
    if (navigator.share && currentAdvice) {
      navigator.share({
        title: 'Lời khuyên hay',
        text: currentAdvice.name,
        url: window.location.href
      })
      .catch(error => console.log('Chia sẻ thất bại', error));
    }
  };

  return (
    <div>
      {!showFavorites ? (
        <>
          {!showAdviceInput ? (
            <div className='card'>
              <AdviceList currentAdvice={currentAdvice} handleRandomAdvice={handleRandomAdvice}/>
              <AdviceActions 
                randomAdvice={handleRandomAdvice}
                toggleFavorites={toggleFavorites}
                addFavouriteAdvice={addFavouriteAdvice}
                handleShare={handleShare}
                toggleAdviceInput={toggleAdviceInput}
              />
            </div>
          ) : (
            <div className='favorites-list'>
              <AdviceInput 
                addAdviceList={addAdviceList} 
                searchAdviceList={searchAdviceList} 
                toggleAdviceInput={toggleAdviceInput}
                toggleAdviceSearch={toggleAdviceSearch}
                showAdviceSearch={showAdviceSearch}
                adviceSearch={adviceSearch}
                />
            </div>
          )}
        </>
        
      ):(
        <FavoriteAdviceList 
            toggleFavorites={toggleFavorites} 
            favouriteAdvice={favouriteAdvice}
            removeFavouriteAdvice={removeFavouriteAdvice}
        />
      )}
    </div>
    
  );
}

export default App;
