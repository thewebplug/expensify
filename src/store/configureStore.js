import { configureStore, applyMiddleware } from '@reduxjs/toolkit'
import expensesReducer from "../reducers/expenses";
import filterReducer from "../reducers/filters";
import thunk from 'redux-thunk'


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
        const store = configureStore({
            reducer: {
                expenses: expensesReducer,
                filters: filterReducer
            },
            
    }, 
    composeEnhancers(applyMiddleware(thunk))
    )

    return store;
}



// import { createStore, combineReducers } from "redux";
// import expensesReducer from "../reducers/expenses";
// import filterReducer from "../reducers/filters";

// export default () => {
//     const store = createStore(combineReducers(
//         {
//             expenses: expensesReducer,
//             filters: filterReducer
//     }
//     ));

//     return store;
// }