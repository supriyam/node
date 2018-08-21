import React, { Component } from 'react';
import {Route, Router} from "react-router-dom";

import {connect} from 'react-redux';
import UsersComp from '../components/UsersComp';
import User from './Users';
import * as userApi from '../api/userApi';

class App extends React.Component{
constructor(props){
    super(props);
    console.log(props);
    
    
}
componentDidMount(){
    console.log('hhhh');
    console.log(this.props.fetchUsers());
}

render(){
  console.log(this.props.mappedUserState);
    return(
      <div>
      <Router history = {this.props.history}/> 
      <UsersComp data ={this.props.mappedUserState.data}/>
      </div>
     )
}
}
const mapStateToProps = (state,ownProps)=>{
    console.log(state);
    return {
        mappedUserState : state.userState
    }
}
const mapDispatchToProps = (dispatch)=>{
    console.log(userApi.fetchuser());
    return {
        fetchUsers :()=>dispatch(userApi.fetchuser())
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(App);




