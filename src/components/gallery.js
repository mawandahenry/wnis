import React, { Component } from 'react'


import BackgroundSlideshow from 'react-background-slideshow'

import image1 from '../images/gallery/1.JPG'
import image2 from '../images/gallery/2.JPG'
import image3 from '../images/gallery/3.JPG'
import image4 from '../images/gallery/4.JPG'
import image5 from '../images/gallery/5.JPG'
import image6 from '../images/gallery/6.JPG'
import image7 from '../images/gallery/7.JPG'
import image8 from '../images/gallery/8.JPG'
import image9 from '../images/gallery/9.JPG'
import image10 from '../images/gallery/10.JPG'
import image11 from '../images/gallery/11.JPG'
import image12 from '../images/gallery/12.JPG'
import image13 from '../images/gallery/13.JPG'
import image14 from '../images/gallery/14.JPG'
import image15 from '../images/gallery/15.JPG'
import image16 from '../images/gallery/16.JPG'
import image17 from '../images/gallery/17.JPG'
import image18 from '../images/gallery/18.JPG'

export default class Gallery extends Component {
  render () {
    return (
      <div style = {{marginTop: '10px'}} className = "gal-bg">
        <BackgroundSlideshow images={[ image1, image2, image3,image4,image5,image6,image7,image8,image9,image10,image11,
        image12,image13,image14,image15,image16,image17,image18 ]} />
      </div>
    )
  }
}
