import {AUTH,LOGOUT} from "../actions/types";


const authReducer=(state={authData:null},action)=>{
    switch (action.type) {
        case AUTH:
          /*   we are setting all of data about login to local storage */
            localStorage.setItem("profile",JSON.stringify({...action?.data}))
            return {...state,authData:action?.data};
        case LOGOUT:
            localStorage.clear();
            return {...state,authData:null};
        default:
            return state;;
    }
}

export default authReducer;