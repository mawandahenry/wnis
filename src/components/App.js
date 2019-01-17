import React from 'react'
import PropTypes from 'prop-types'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { LOGIN,ABOUT,HOME } from '../routes/';
import { Route,Switch} from 'react-router-dom'
import Home from './home';
import About from './about';
import Header from './header';
import Modal from './modal';



class App extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div>
    <Header />
      <Switch>
      <Route path = {ABOUT} component = {About} />
      <Route path = {HOME} component = {Home} />
      </Switch>

      </div>

    )
  }
}
export default App;
