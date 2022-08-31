import {AUTH} from "./types";
import * as api from "../api/index"

export const signin=(formData,history) => async (dispatch) => {
    try {
        //log in the user..
        history.pushState("/")
    } catch (error) {
        console.log(error);
    }
}

export const signup=(formData,history) => async (dispatch) => {
    try {
        //log in the user..
        history.pushState("/")
    } catch (error) {
        console.log(error);
    }
}