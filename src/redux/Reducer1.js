import { combineReducers } from "redux";
import COMMENTS from "../data/Comments";
import * as actionType from './actTypes.js'

// const state1 = {
//     dishes: Foods,
//     comments: COMMENTS,
//     sample: "Hello World!",
// }

export const ReducerDish = (dState = { isLoading: false, dishes: [] }, action) => {
    console.log("reducer", action);
    switch (action.type) {
        case actionType.DISHES_LOADING:
            return {
                ...dState,
                isLoading: true,
                dishes: [],
            }
        case actionType.DISHES_LOADED:
            return {
                ...dState,
                isLoading: false,
                dishes: action.payload,
            }
        default:
            return dState;
    }
}
export const ReducerComment = (cState = COMMENTS, action) => {
    switch (action.type) {
        case "TEST":
            // return {
            //     ...cState,
            //     sample: state.sample.replace('Hello', action.str),
            // }
            break;
        case "TEST2":
            // return {
            //     ...state,
            //     value: action.value,
            // }
            break;
        case actionType.ADD_COMMENT:
            let commentObj = action.payload;
            commentObj.id = cState.length;
            commentObj.date = new Date().toDateString();
            commentObj.rating = parseInt(commentObj.rating)
            // console.log("obj", commentObj);
            // console.log("state", state);
            return cState.concat(commentObj);
        default:
            //console.log("action: ", action);
            return cState;
    }
}

export const Reducer1 = combineReducers({
    dishes: ReducerDish,
    comments: ReducerComment,

    //console.log("Reducer1", action);

    // if (action.type === "TEST") {
    //     return {
    //         ...state,
    //         sample: state.sample.replace('Hello', action.str),
    //     }
    // }

    //redux state update using dispatch from 'Home.js'

});