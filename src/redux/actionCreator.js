import * as actionType from '../redux/actTypes.js';
import Foods from '../data/Foods';

export const addComment = (dishId, author, comment, rating) => {
    console.log("actionCreator", author);
    return ({
        type: actionType.ADD_COMMENT,
        payload: {
            dishId: dishId,
            author: author,
            comment: comment,
            rating: rating,
        }
    });
}
export const dishLoaded = dishes => ({
    type: actionType.DISHES_LOADED,
    payload: dishes,
})

export const dishLoading = () => ({
    type: actionType.DISHES_LOADING,
})

export const AsyncFetchDishes = () => {
    return dispatch => {
        dispatch(dishLoading());
        setTimeout(() => {
            dispatch(dishLoaded(Foods));
        }, 2000);
    }
}