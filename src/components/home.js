import React from 'react';
import pic from '../images/back2.jpg';
import pic2 from '../images/back1.jpg';
import pic3 from '../images/beauty.jpg';
import pic4 from '../images/flowers.jpg';
import pic5 from '../images/venom1.jpg';



const Home = () =>{
return (
  <div>
  <div id="carouselExampleFade" className="carousel slide carousel-fade first-label" data-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img className="d-block w-100" src={pic} alt="First slide" height = "500"/>
      <div className="carousel-caption d-none d-md-block">
   <h5>Wall paper</h5>
   <p>it was so fantastic to share the team experience with the rest of the entire world man</p>
 </div>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src={pic2} alt="Second slide" height = "500"/>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src={pic3} alt="Third slide" height = "500"/>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src={pic4} alt="forth slide" height = "500"/>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src={pic5} alt="fifth slide" height = "500"/>
    </div>
  </div>
  <a className="carousel-control-prev" href="#carouselExampleFade" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleFade" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>
</div>
    );
  }


export default Home;
