import React from 'react';
import {withRouter} from 'react-router';
import UsersComp from '../components/UsersComp';
import * as userApi from '../api/userApi';

export class Users extends React.Component{
    constructor(props){
        super(props);
        console.log(props);
        
        
    }

componentDidMount(){
    console.log('hhhh');
    console.log(this.props.fetchUsers());
}

render(){
    return(
        <UsersComp data ={this.props.mappedUserState.data}/>
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
export default withRouter(mapStateToProps,mapDispatchToProps)(Users);