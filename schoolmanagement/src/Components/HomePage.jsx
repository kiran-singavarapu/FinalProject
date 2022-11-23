import React from 'react'
import Loginnavbar from './Loginnavbar';
import home_image from './home_image.jpg'

export default function HomePage() {
  return (
    <div>
        <Loginnavbar/>
        <div>
        <img src={home_image} style={{"width":"1600px","height":"650px"}}/>
        </div>
    </div>
  )
}
