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

export function getUsers(){
    console.log('hii');
    return {
        type:GET_NEW_USER_REQUEST
    };
} 

export function getUsersSuccess(data){
    console.log(data);
    return {
        type:GET_NEW_USER_SUCCESS,
        data
    };
} 

export function getUsersError(error){
    return{
        type : GET_NEW_USER_ERROR,
        error
    };
}

export function getUserId(){    
    return {
        type:GET_USER_REQUEST
    };
}

export function getUserIdSuccess(data){
    return {
        type:GET_USER_SUCCESS,
        data
    };
}

export function getUserIdError(error){
    return {
        type:GET_USER_ERROR,
        error
    };
}

export function addUser(){
    return {
        type : ADD_NEW_USER_REQUEST
    };
}

export function addUserSuccess(data){
    return {
        type: ADD_NEW_USER_SUCCESS,
        data
    };
}

export function addUserError(error){
    return {
        type : ADD_NEW_USER_ERROR,
        error
    }
}

export function updateUser(){
    return {
        type : UPDATE_USER_REQUEST
    };
}

export function updateUserSuccess(data){
    return {
        type: UPDATE_USER_SUCCESS,
        data
    };
}

export function updateUserError(error){
    return {
        type : UPDATE_USER_ERROR,
        error
    }
}

export function deleteUser(){
    return {
        type : DELETE_USER_REQUEST
    };
}

export function deleteUserSuccess(data){
    return {
        type: DELETE_USER_SUCCESS,
        data
    };
}

export function deleteUserError(error){
    return {
        type : DELETE_USER_ERROR,
        error
    }
}