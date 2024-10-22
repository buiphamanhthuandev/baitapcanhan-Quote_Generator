import { GiPerspectiveDiceSixFacesRandom } from "react-icons/gi";
import { FaHeart } from "react-icons/fa";
import { MdOutlinePostAdd } from "react-icons/md";
import { PiListHeart } from "react-icons/pi";
import { FaShareAlt } from "react-icons/fa";
export const AdviceActions = (props)=>{
    const randomAdvice = props.randomAdvice;
    const toggleFavorites = props.toggleFavorites;
    const addFavouriteAdvice = props.addFavouriteAdvice;
    const handleShare = props.handleShare;
    const toggleAdviceInput = props.toggleAdviceInput;
    return (
        <div className="buttonAction">
            <button id="text" onClick={randomAdvice}><GiPerspectiveDiceSixFacesRandom style={{ fontSize: '27px' }}/></button>
            <button id="text" onClick={addFavouriteAdvice}><FaHeart style={{ fontSize: '24px' }}/></button>
            <button id="text" onClick={toggleFavorites}><PiListHeart style={{ fontSize: '24px' }}/></button>
            <button id="text" onClick={handleShare}><FaShareAlt style={{ fontSize: '24px' }}/></button>
            <button id="text" onClick={toggleAdviceInput}><MdOutlinePostAdd style={{ fontSize: '27px' }}/></button>
        </div>
    )   
}
