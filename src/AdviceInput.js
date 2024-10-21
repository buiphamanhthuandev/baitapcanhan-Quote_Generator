import { useState } from 'react';
export const AdviceInput = (props) => {
    const {addAdviceList,searchAdviceList,toggleAdviceInput} = props;
    const [adInput,setAdInput] = useState('')
    const [adsearch,setAdSearch] = useState('')
    return (
        <div className="AdviceInputSearch">
            <div className='AdviceSearch'>
                <p>Tìm kiếm lời khuyên ngẩu nhiên</p>
                <input 
                    type="text" 
                    placeholder="Tìm kiếm lời khuyên" 
                    onChange={(e)=> setAdSearch(e.target.value)}
                />
                <button id="text" onClick={()=>{searchAdviceList(adsearch)}}><span>Tìm kiếm</span></button>
            </div>
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