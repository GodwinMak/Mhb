import React, {useState} from 'react'
import DataImage from './DataImage'
import './gallery.scss'
import { FaTimes } from 'react-icons/fa'


const Gallery = () => {
    const [model, setModel] = useState(false);
    const [tempImgSrc, setTempImgSrc] = useState('');
    const getImg = (imgSrc, desc)=>{
        setTempImgSrc(imgSrc);
        setModel(true);
    }
    const onClick = (event) =>{
        event.preventDefault()
        setTempImgSrc("");
        setModel(false);
    }
    console.log(tempImgSrc)
  return (
    <>
        <div className={model ? "model open": "model"}>
            <img src={tempImgSrc} alt=''/>
              <FaTimes onClick={(event) => onClick(event)}/>
        </div>
        <div className='gallery'>
            {
                DataImage.map((item, id) => {
                    return (
                        <div className="pics" key={id} onClick={() => getImg(item.ImgSrc)}>
                            <img
                                src={item.ImgSrc}
                                alt=""
                                style={{
                                    width: '100%',

                                }}
                            />
                            <p>
                                {item.desc}
                            </p>
                        </div>
                    )
                })
            }
        </div>
    </>
    
  )
}

export default Gallery