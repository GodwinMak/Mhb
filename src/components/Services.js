import React, {useState, useEffect, useRef} from 'react'
import dataServices from './dataService'
import "./Services.scss"
import BtnSlider from './Slider/BtnSlider'

const delay = 2500;


const Services = () => {

    const [slideIndex, setSlideIndex] = useState(1);

    // const[num, setNum]= useState(0);
    // const timeOutRef = useRef(null);

    // const resetTimeout = ()=>{
    //     if(timeOutRef.current){
    //         clearTimeout(timeOutRef.current);
    //     }
    // }

    // useEffect(() => {
    //   resetTimeout();
    //   timeOutRef.current= setTimeout(
    //       ()=>setNum((prevNum)=>
    //           prevNum === dataServices.length -1 ? 0 : prevNum + 1
    //       ),delay
    //   );
    //   return () => {};
    // }, [num])
    


    const nextSlide = () =>{
        if(slideIndex !== dataServices.length){
            setSlideIndex(slideIndex + 1)
        }else if (slideIndex === dataServices.length) {
            setSlideIndex(1);
        }

    }

    const prevSlide = () => {
        if(slideIndex !== 1){
            setSlideIndex(slideIndex - 1)
        }
        else if (slideIndex === 1){
            setSlideIndex(dataServices.length)
        }
    }

    const moveDot = index => {
        setSlideIndex(index)
    }
  return (
    <div className='service-container' id='service'>
        <h2 className='service__header'>Our Services</h2>
        <span className='service__line'></span>
            {dataServices.map((obj, index)=>{
            return(
                <div 
                    key={obj.id}
                    className={slideIndex === index +1 ? "service__slide active-anim" : 'service__slide'}>
                    
                    <img  src={process.env.PUBLIC_URL + `/icons/img${index + 1}.svg`} alt="" className='service__img'/>
                    
                    <h3 className='service__slide__header'>{obj.tittle}</h3>
                    <p  className='par'>
                        {obj.par}
                    </p>
                </div>
            )
        })}
        <BtnSlider moveSlide = {nextSlide} direction= {'next'}/>
        <BtnSlider moveSlide = {prevSlide} direction = {'prev'}/>
        <div className="container-dots">
            {Array.from({length: 6}).map((item, index) => (
                <div
                    key={index}
                onClick={() => moveDot(index + 1)}
                className={slideIndex === index + 1 ? "service__dot active" : "service__dot"}
                ></div>
            ))}
        </div>
    </div>
  )
}

export default Services