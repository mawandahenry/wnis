import React from 'react';
import pic from '../images/1.JPG';
import pic2 from '../images/2.JPG';
import pic3 from '../images/3.JPG';
import pic4 from '../images/4.JPG';
import pic5 from '../images/5.JPG';
import pic7 from '../images/6.JPG';
import pic8 from '../images/7.JPG';
import pic6 from '../images/winis.jpg';



const Home = () =>{
return (
  <div >
  <div id="carouselExampleFade" className="carousel slide carousel-fade first-label" data-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img className="d-block w-100 qwerty" src={pic} alt="First slide" height = "700"/>
      <div className="carousel-caption d-none d-md-block">
   <h5>Wall paper</h5>
   <p>it was so fantastic to share the team experience with the rest of the entire world man</p>
 </div>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100 qwerty" src={pic2} alt="Second slide" height = "700"/>
      <div className="carousel-caption d-none d-md-block">
   <h5>Wall paper</h5>
   <p>it was so fantastic to share the team experience with the rest of the entire world man</p>
 </div>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100 qwerty" src={pic3} alt="Third slide" height = "700"/>
      <div className="carousel-caption d-none d-md-block">
   <h5>Wall paper</h5>
   <p>it was so fantastic to share the team experience with the rest of the entire world man</p>
 </div>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100 qwerty" src={pic4} alt="forth slide" height = "700"/>
      <div className="carousel-caption d-none d-md-block">
   <h5>Wall paper</h5>
   <p>it was so fantastic to share the team experience with the rest of the entire world man</p>
 </div>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100 qwerty" src={pic5} alt="fifth slide" height = "700"/>
      <div className="carousel-caption d-none d-md-block">
   <h5>Wall paper</h5>
   <p>it was so fantastic to share the team experience with the rest of the entire world man</p>
 </div>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100 qwerty" src={pic7} alt="fifth slide" height = "700"/>
      <div className="carousel-caption d-none d-md-block">
   <h5>Wall paper</h5>
   <p>it was so fantastic to share the team experience with the rest of the entire world man</p>
 </div>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100 qwerty" src={pic8} alt="fifth slide" height = "700"/>
      <div className="carousel-caption d-none d-md-block">
   <h5>Wall paper</h5>
   <p>it was so fantastic to share the team experience with the rest of the entire world man</p>
 </div>
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


<div className="row mt-10">
<div className="col-md-10 col-sm-8 col-xs-6 " style = {{margin: 'auto'}}>
<h2 className="text-center">WNIS UGANDA</h2>
<p className = "lead text-center">&quot;Doing little things out of love&quot;</p>
</div>
</div>
<h1 className="maintitle">.</h1>

<div className = "row mb-10">
  <div className="col-md-7 maro">
    <h5 ><u>About Wnis</u></h5>
    <blockquote className = "text-secondary">
  	<span>I</span>s a non-profitable charity organization which was founded in 2014 September 14th by<b> Matovu Hamuza (Francis)</b> Basing on our mission and vision. We are youths who want to make a difference in lives of the many homeless kids and other many youths who think that their only hope is using drugs, fighting and picking pockets,
    we want to let them think again and restore their functional abilities to be important people tomorrow, by transforming their lives through a great rehabilitation everyday every time we meet them, by getting them a proper shelter and getting them back to school whenever possible, and empowering young adults to initiate small scale jobs in order to raise money to improve their standards of living. We believe that causing a difference doesn&quot;t need one to be rich or to have much but it only need to do the little you can out of love, it begins with me, you and then the world
  </blockquote>
  <blockquote className = "text-secondary">
  	We utelize the little we have to give back to these less previledged people and so we call upon all well wishers and donars to give in a hand, to come and support our works with whatever you have so that we help our brothers and sisters to realize their dreams.
  	<span id="spec">Our mission: </span>To give hope to the hopeless and showing love to the loveless.
<span id="spec">Our vision:</span> To improve the living status of poor families and to inspire the homeless children to be important citizens.
<span id="spec">Our motto: </span>&quot;Doing little things out of love&quot;
  </blockquote>
    </div>
  <div className = "col-md-5"><img  src={pic6} alt="Generic placeholder image" style = {{width: 'auto'}} /></div>
</div>
<h1 className="maintitle">.</h1>
<div className="row mt-10" style = {{marginTop: '10px'}}>

<div className="col-md-4 card">
<div className="card-header bg-info">
<h3 className="text-center">Reaching out<span className="fa fa-user text-warning"></span></h3>
</div>
<div className="card-body">
<p>
 This is where we go out to the community and meet with the less fortunate people
  and families with our packages (clothes, shoes, sugar), and we deliver them to these people
  as a sign of hope n sharing love
</p>
</div>
<div className="card-footer">
<button className="btn btn-outline-primary btn-block">Continue</button>
</div>
</div>

<div className="col-md-4 card">
<div className="card-header bg-info">
<h3 className="text-center">The little matters</h3>
</div>

<div className="card-body">
<p> Whatever you have, clothes, food, funds, bedings, shoes, etc we welcome
 it in the name of Jesus.It makes a difference in so many lives. so you have
 the power to make that difference
</p>

</div>
<div className="card-footer">
<button className="btn btn-outline-primary btn-block">Continue</button>
</div>
</div>
<div className="col-md-4 card">
<div className="card-header bg-info">
<h3 className="text-center">Our Projects</h3>
</div>

<div className="card-body">
<p>
Wnis is involved in some many activities which include, reaching
 out to street children, feeding them, taking orphans to school, providing
 basic needs of life to the less fortunate people and so many others..
</p>
</div>
<div className="card-footer">
<button className="btn btn-outline-primary btn-block">Continue</button>
</div>
</div>
</div>


</div>
    );
  }


export default Home;
