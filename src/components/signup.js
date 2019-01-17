import React,{ Component } from 'react';
import { reduxForm, Field ,reset} from 'redux-form';
import renderField from './renderField';
import Spinner from '../images/apple.gif';
import { firebaseConnect, isLoaded, isEmpty } from 'react-redux-firebase';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {compose} from 'redux';
import {connect} from 'react-redux';
import { add_rate,fetching } from '../actions/';
import Funny from '../images/fuuny.gif';
import fire from '../config/firebase';


class Signup extends Component {
constructor(props){
  super(props);

}
sender = values => {
  this.props.add_rate(values)
}

componentWillMount(){
  this.props.fetching();
}

 paste = (data) => {

console.log('red');

}


render(){
const {handleSubmit,firebase,pristine,submitting} = this.props;
fire.collection('rates').onSnapshot(snapshots => snapshots.docChanges(function(change) {
        if (change.type === "added") {
          console.log('added');
        }
      }))
  return(
  <div className = "row">
<div className="col-md-6 col-sm-6 col-xs-6 stl" style = {{margin: 'auto', marginTop: '5%'}}>
<div className="card">
<div className="card-header">
<h3 className = "text-center">Login Form</h3>
</div>
<div className="card-body">
<form onSubmit = {handleSubmit(this.sender)}>
<div className="form-group">
  <Field type="text" name = "Food_name"  label="food name" component = {renderField} />
</div>
<div className="form-goup">
  <Field  type="text" name = "rating"   label="Rating" component = {renderField} />
</div>
<div className="form-group">
  <Field  type="text" name = "rater_name"   label="Rater name" component = {renderField} />
</div>
<div className="form-group">
<input className="btn btn-info btn-block" type="submit" value="Add" disable = {pristine || submitting}/>
</div>
</form>
<div className="card-footer">
<div className="col-md-3">
{this.props.lists.rating.loading? (<img src = {Funny} alt = "loading....." style = {{margin: 'auto'}} />): null}
</div>
<p className = "lead">Don t have an Account? <Link to="/add"> Signup Now!</Link></p>

</div>
</div>
</div>
</div>
<div className="col-md-5 " style = {{margin: 'auto', marginTop: '5%'}}>
<div className="card">
<div className="card-header">
<h3 className="text-center">Rates</h3>
</div>
<div className="card-body">
<ul className="list-group">
{
  this.props.lists.rating.food?
    this.props.lists.rating.food.map((food) => {
      return(
        <>
        <li className="list-group-item">{food.Food_name}</li>
        </>
      )
    })
  : (<p>Loading..........</p>)
}
</ul>
</div>
</div>
</div>
</div>
)





}
}
const mapStateToProps = state => {
return {
  lists: state.lists
 }
}

export default compose(reduxForm({form: 'signup'}),connect(mapStateToProps,{add_rate,fetching}))(Signup);
