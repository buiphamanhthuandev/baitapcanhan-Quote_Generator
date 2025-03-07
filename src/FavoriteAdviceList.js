import { ImExit } from "react-icons/im";
import { MdDeleteForever } from "react-icons/md";
export const FavoriteAdviceList = (props) => {
    const {toggleFavorites,favouriteAdvice,removeFavouriteAdvice} = props;
    return (
        <div className='favorites-list'>
            <div className='favorites-header'>
                <button onClick={toggleFavorites}><ImExit style={{ fontSize: '24px' }}/></button>
                <h3>Danh sách lời khuyên yêu thích!</h3>
            </div>
            <div className='favorites-main'>
                {favouriteAdvice && favouriteAdvice.length > 0 ? (
                    favouriteAdvice.map(advice => (
                    <div key={advice.id} className='favorites-main-item'>
                        <h5>#{advice.id}</h5>
                        <h4>{advice.name}</h4>
                        <button onClick={() => {removeFavouriteAdvice(advice.id)}}><MdDeleteForever style={{ fontSize: '24px' }}/></button>
                    </div>
                    ))
                ) : (
                    <p>Lời khuyên yêu thích không có!</p>
                )}
            </div>
      </div>
    )
}