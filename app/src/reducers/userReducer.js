import { GET_NEW_USER_REQUEST, GET_NEW_USER_SUCCESS, GET_NEW_USER_ERROR } from "../constants/user";

const INITIAL_STATE = {
    data : []
}

export const userReducer = (currentState = INITIAL_STATE,action) =>
{
    switch(action.type){
        case GET_NEW_USER_REQUEST:
        return{
            ...currentState,
            data:[]
        }
        case GET_NEW_USER_SUCCESS:
        return{
            ...currentState,
            data:action.data
        }
        case GET_NEW_USER_ERROR:
        return{
            ...currentState,
            data:[]
        }
        default:
        return {
            ...currentState
        }
    }
}

export default userReducer;