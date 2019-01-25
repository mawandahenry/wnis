import React from 'react'
import PropTypes from 'prop-types'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { LOGIN,ABOUT,HOME,CONTACT,GALLERY } from '../routes/';
import { Route,Switch } from 'react-router-dom'
import Home from './home';
import About from './about';
import Header from './header';
import Gallery from './gallery';
import Footer from './footer';
import Contact from './contact';




class App extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div>
     <Header />
      <Switch>
      <Route path = {GALLERY} component = {Gallery} />
      <Route path = {CONTACT} component = {Contact} />
      <Route path = {ABOUT} component = {About} />
      <Route path = {HOME} component = {Home} />
      </Switch>
      <Footer />
      </div>

    )
  }
}
export default App;
