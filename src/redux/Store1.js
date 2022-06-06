import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import thunk from "redux-thunk";
import { Reducer1 } from "./Reducer1";

const Store1 = configureStore({
    reducer: {
        // Define a top-level state field named `todos`, handled by `todosReducer`
        myReducer: Reducer1,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger, thunk),
})
export default Store1;