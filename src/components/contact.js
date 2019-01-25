import React, {Component} from 'react'
import one from '../images/contacts/contact5.JPG';
import two from '../images/contacts/contact3.JPG';
import three from '../images/contacts/contact4.JPG';


class Contact extends Component{
  constructor(props){
    super(props)
    this.state = {
      names: '',
      email: '',
      message: ''
    }
  }

  picker = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  sub_handle = (ex) => {
    ex.preventDefault();
    console.log(this.state)
  }
  render(){
    return(
      <div className="login-block">
      <div className="container">
    	<div className="row">
    	<div className="col-md-4 login-sec">
    	<h2 className="text-center">Leave a Message</h2>
      <form className="login-form" onSubmit = {this.sub_handle}>
      <div className="form-group">
      <label forhtml="exampleInputEmail1" className="text-uppercase">Full Names</label>
      <input type="text" className="form-control" placeholder="" name = "names" onChange = {this.picker}/>

      </div>
      <div className="form-group">
      <label forhtml="exampleInputPassword1" className="text-uppercase">Email</label>
      <input type="email" className="form-control" placeholder="" name = "email" onChange = {this.picker}/>
      </div>

      <div className="form-group">
    <textarea className="form-control" name="message" onChange = {this.picker} cols="33" rows="6" required placeholder ="message***"></textarea>
      </div>
      <div className="form-group">
      <input className="btn btn-info btn-block" type="submit" name="send" value="send" />
      </div>
    </form>
    <div className="copy-text">
      <span className="fa fa-envelope">Email:</span>
      wnis@mail.com
    </div>
    <div>
    <span className="fa fa-phone">Contact:</span>
    +25677777777
    </div>
    </div>
    		<div className="col-md-8 banner-sec">
        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner" role="listbox">

        <div className="carousel-item active">
        <img className="d-block img-fluid" src={one} alt="First slide"/>
        <div className="carousel-caption d-none d-md-block">
        <div className="banner-text">
        <h2>WNIS</h2>
        <p> paragraph goes here</p>
        </div>
        </div>
        </div>

        <div className="carousel-item">
        <img className="d-block img-fluid" src={two} alt="First slide"/>
        <div className="carousel-caption d-none d-md-block">
        <div className="banner-text">
        <h2>WNIS2</h2>
        <p>paragraph 2</p>
        </div>
        </div>
        </div>

        <div className="carousel-item">
        <img className="d-block img-fluid" src={three} alt="First slide"/>
        <div className="carousel-caption d-none d-md-block">
        <div className="banner-text">
        <h2>WNIS3</h2>
        <p>paragraph3</p>
        </div>
        </div>
        </div>

        </div>

        </div>
        </div>

    </div>
    </div>
    </div>

    )
  }
}
export default Contact;
