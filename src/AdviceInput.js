import { useState } from 'react';
import { ImExit } from "react-icons/im";
export const AdviceInput = (props) => {
    const {addAdviceList,searchAdviceList,toggleAdviceInput,adviceSearch,toggleAdviceSearch,showAdviceSearch} = props;
    const [adInput,setAdInput] = useState('')
    const [adsearch,setAdSearch] = useState('')
    return (
        <div className="AdviceInputSearch">
            <button className="ActionExit" onClick={()=>{
                toggleAdviceSearch();
                toggleAdviceInput();
            }}><ImExit style={{ fontSize: '24px' }}/></button>
            <div className='AdviceSearch'>
                <p>Tìm kiếm lời khuyên ngẩu nhiên</p>
                <input 
                    type="text" 
                    placeholder="Tìm kiếm lời khuyên" 
                    onChange={(e)=> setAdSearch(e.target.value)}
                />
                <button id="text" onClick={()=>{
                    toggleAdviceSearch();
                    searchAdviceList(adsearch);
                    }}>
                <span>Tìm kiếm</span></button>
            </div>
            {showAdviceSearch ? (
                adviceSearch.length > 0 ? (
                    adviceSearch.map((advice) => 
                    <div key={advice.id} className='advice-input-item'>
                    <h5>#{advice.id}</h5>
                    <h4>{advice.name}</h4>
                    </div>
                    )
                ) : (
                    <p>Không có trong danh sách!</p>
                )
            ):(
                ''
            )} 

            <div className="AdviceInput">
                <p>Thêm lời khuyên ngẩu nhiên</p>
                <input 
                    type="text" 
                    placeholder="Thêm lời khuyên mới" 
                    onChange={(e) => setAdInput(e.target.value)}
                />
                <button id="text" onClick={()=>{
                    addAdviceList(adInput);
                    toggleAdviceInput();
                }}><span>Thêm mới</span></button>
            </div>
        </div>
    );
}