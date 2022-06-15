import { combineReducers } from "redux";
// import COMMENTS from "../data/Comments";
import * as actionType from './actTypes.js'

// const state1 = {
//     dishes: Foods,
//     comments: COMMENTS,
//     sample: "Hello World!",
// }

export const ReducerDish = (dState = { isLoading: false, errorMessage: null, dishes: [] }, action) => {
    // debugger
    // console.log("reducer", action);
    switch (action.type) {
        case actionType.DISHES_LOAD_FAILED:
            return {
                ...dState,
                isLoading: false,
                errorMessage: action.payload,
                dishes: [],
            }
        case actionType.DISHES_LOADING:
            return {
                ...dState,
                isLoading: true,
                errorMessage: null,
                dishes: [],
            }
        case actionType.DISHES_LOADED:
            return {
                ...dState,
                isLoading: false,
                errorMessage: null,
                dishes: action.payload,
                axios: action.axios
            }
        case actionType.DISHES_LOADED_AXIOS:
            return {
                ...dState,
                isLoading: false,
                dishes: action.payload,
                errorMessage: null,
                axios: action.axios
            }
        default:
            return dState;
    }
}
export const ReducerComment = (cState = { isLoading: true, comments: [] }, action) => {
    switch (action.type) {
        case actionType.COMMENTS_LOADED:
            return {
                ...cState,
                isLoading: false,
                comments: action.payload
            };
        case actionType.COMMENTS_LOADING:
            return {
                ...cState,
                isLoading: true,
                comments: [],
            }
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
            commentObj.id = cState.comments.length;
            commentObj.date = new Date().toDateString();
            commentObj.rating = parseInt(commentObj.rating)
            // debugger
            // console.log("obj", commentObj);
            // console.log("state", state);
            return {
                ...cState,
                comments: cState.comments.concat(commentObj)
            };
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