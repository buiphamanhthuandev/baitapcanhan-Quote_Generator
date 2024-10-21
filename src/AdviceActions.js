export const AdviceActions = (props)=>{
    const randomAdvice = props.randomAdvice;
    const toggleFavorites = props.toggleFavorites;
    const addFavouriteAdvice = props.addFavouriteAdvice;
    const handleShare = props.handleShare;
    const toggleAdviceInput = props.toggleAdviceInput;
    return (
        <div className="buttonAction">
            <button id="text" onClick={randomAdvice}><span>rdom</span></button>
            <button id="text" onClick={addFavouriteAdvice}><span>Yêu thích</span> </button>
            <button id="text" onClick={toggleFavorites}><span>List</span> </button>
            <button id="text" onClick={handleShare}><span>Chia sẽ</span> </button>
            <button id="text" onClick={toggleAdviceInput}><span>Thêm</span> </button>
        </div>
    )   
}
