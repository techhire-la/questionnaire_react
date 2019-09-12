// uuid creates a unique id for our alerts
import uuid from 'uuid';
import {SET_ALERT, REMOVE_ALERT} from "./types"

export const setAlert = (msg, alertType, timeout = 5000) = dispatch => {
    const id =uuid.v4();

    dispatch({
        type: SET_ALARM,
        payload: {msg, alertType, id }
    });

    setTimeout({type: REMOVE_ALERT, payload:id}), timeout);


}