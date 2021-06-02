import React from  'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Slideimg = ({v}) =>{
    let filename = v.file_names;
    const list =[];
    
    filename.map((m)=>{
        if(v.urls[m]['16:9'][1600])
        {
            list.push(v.urls[m]['16:9'][1600]);
        }
    })
   
    const [index,setIndex] = React.useState(0);
    const img = list[index];
    
    const checkNumber = (number) => {
        if (number > list.length - 1) {
            return 0;
        }
        if (number < 0) {
            return list.length - 1;
        }
        return number;
    };
    const nextImg = () => {
        setIndex((index) => {
            let newIndex = index + 1;
            return checkNumber(newIndex);
        });
    };
    const prevImg = () => {
        setIndex((index) => {
            let newIndex = index - 1;
            return checkNumber(newIndex);
        });
    };
    return (
        <article >
            <div className="res-img-container">
                <img src={img} alt="No Data Found" className="res-img"/>
            </div>
            <div>
                <button className="prev-btn" onClick={prevImg}><FaChevronLeft /></button>
                <button className="next-btn" onClick={nextImg}><FaChevronRight/></button>
            </div>
        </article>
    );
}

export default Slideimg;