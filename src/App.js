
import { useEffect, useState } from 'react';
import './App.css';
import {AdviceList} from './AdviceList';
import {AdviceActions} from './AdviceActions';
import {AdviceInput} from './AdviceInput';
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
  //function search advice in advicelist
  const searchAdviceList = (searchAdvice) => {
    const tmp = adviceList.find(advice => advice.name.toLowerCase() === searchAdvice.toLowerCase());
    return tmp;
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


  //Sự kiện danh sách yêu thích 
  const [showFavorites,setShowFavorites] = useState(false);

  //Hàm xử lý khi nhấn nút danh sách 
  const toggleFavorites = () =>{
    const temp = !showFavorites
    setShowFavorites(temp);
  }

  //Sự kiện thêm và search lời khuyên 
  const [showAdviceInput,setShowAdviceInput] = useState(false);
  //Hàm xử lý khi nhấn nút thêm lời khuyên
  const toggleAdviceInput = () => {
    const temp = !showAdviceInput;
    setShowAdviceInput(temp);
  }

  //hàm chia sẽ lời khuyên 
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
              <AdviceInput addAdviceList={addAdviceList} searchAdviceList={searchAdviceList} toggleAdviceInput={toggleAdviceInput}/>
            </div>
          )}
        </>
        
      ):(
        <div className='favorites-list'>
          <div className='favorites-header'>
            <button onClick={toggleFavorites}>← Trở về</button>
            <h3>Danh sách lời khuyên yêu thích!</h3>
          </div>
          <div className='favorites-main'>
            {favouriteAdvice && favouriteAdvice.length > 0 ? (
              favouriteAdvice.map(advice => (
                <div key={advice.id} className='favorites-main-item'>
                  <h5>#{advice.id}</h5>
                  <h4>{advice.name}</h4>
                  <button onClick={() => {removeFavouriteAdvice(advice.id)}}>Xóa</button>
                </div>
              ))
            ) : (
              <p>Lời khuyên yêu thích không có!</p>
            )}
          </div>
        </div>
      )}
    </div>
    
  );
}

export default App;