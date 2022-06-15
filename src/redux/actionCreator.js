import * as actionType from '../redux/actTypes.js';
import Foods from '../data/Foods';
import axios from 'axios';

// dishes/foods
export const dishLoadedFromAxios = dishes => ({
    type: actionType.DISHES_LOADED_AXIOS,
    payload: dishes,
    axios: true,
})
export const dishLoadFailed = errorMessage => ({
    type: actionType.DISHES_LOAD_FAILED,
    payload: errorMessage,
})
export const dishLoaded = dishes => ({
    type: actionType.DISHES_LOADED,
    payload: dishes,
    axios: false,
})
export const dishLoading = () => ({
    type: actionType.DISHES_LOADING,
})

export const AsyncFetchDishes = () => dispatch => {
    dispatch(dishLoading());

    setTimeout(() => {
        dispatch(dishLoaded(Foods));

    }, 1000);

    setTimeout(() => {
        axios.get(`${actionType.base_url}dishes`)
            .then(response => dispatch(dishLoadedFromAxios(response.data)))
            .catch(error => dispatch(dishLoadFailed(error.message)));
    }, 3000);
}

// comments
export const commentsLoading = () => ({
    type: actionType.COMMENTS_LOADING
})
export const commentsLoaded = comments => ({
    type: actionType.COMMENTS_LOADED,
    payload: comments
})
export const AsyncFetchComments = () => dispatch => {
    dispatch(commentsLoading());

    setTimeout(() => {
        axios.get(`${actionType.base_url}comments`)
            .then(response => {
                // debugger
                return dispatch(commentsLoaded(response.data))
            })
            .catch(error => error.message);
    }, 6000);
}
// comments add/update
export const addComments = commentObj => {
    return ({
        type: actionType.ADD_COMMENT,
        payload: commentObj
    });
}
export const addJsonComment = commentObj => dispatch => {
    commentObj["date"] = new Date().toISOString();
    axios.post(actionType.base_url + "comments", commentObj)
        .then(response => dispatch(addComments(response.data)))
        .catch(error => console.log("comments load", error.message))
}