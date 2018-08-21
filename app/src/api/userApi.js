import {API_ENDPOINTS} from '../constants/api';
import {
    GET_NEW_USER_REQUEST,
    GET_NEW_USER_SUCCESS,
    GET_NEW_USER_ERROR,
    GET_USER_REQUEST,
    GET_USER_SUCCESS,
    GET_USER_ERROR,
    ADD_NEW_USER_REQUEST,
    ADD_NEW_USER_SUCCESS,
    ADD_NEW_USER_ERROR,
    UPDATE_USER_REQUEST,
    UPDATE_USER_SUCCESS,
    UPDATE_USER_ERROR,
    DELETE_USER_REQUEST,
    DELETE_USER_SUCCESS,
    DELETE_USER_ERROR
} from '../constants/user';

import {
    getUsers,
    getUsersSuccess,
    getUsersError,
    getUserId,
    getUserIdSuccess,
    getUserIdError
} from '../actions/userAction';
console.log(`${API_ENDPOINTS.getUser}`);
export const fetchuser = () => {
    return (dispatch)=>{
        dispatch(getUsers());
        return fetch(`${API_ENDPOINTS.getUser}`)
                    .then(response => { 
                        if(response){
                        response.json().then(res =>  { 
                                                    
                          dispatch(getUsersSuccess(res))                           
                        })
                         
                        }else{
                            dispatch(getUsersError())
                        }
                    })
    }
}

