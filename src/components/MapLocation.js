import React from 'react'
import "./MapLocation.scss"
import {HiOutlineLocationMarker} from 'react-icons/hi'

const MapLocation = () => {
  return (
    <div className='map__container'>
      <div className='location__container'><HiOutlineLocationMarker className='location'size={50}/></div>
      <iframe className='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3986.0961429591157!2d39.149896578475804!3d-6.62978412317976!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x185c582a4bd11edb%3A0x60144839243c2220!2sBoko%20CCM!5e0!3m2!1sen!2stz!4v1654161303667!5m2!1sen!2stz" 
      width="800" height="600" allowFullScreen="true" 
      loading="lazy" referrerPolicy="no-referrer-when-downgrade" title='map'></iframe>
    </div>
  )
}

export default MapLocation