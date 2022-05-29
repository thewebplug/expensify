import { createStore } from "redux";

const increment = (num = 1) => (
    {
       type: 'INCREMENT',
       incrementBy: num,
   }
)

const decrement = ({decrementBy = 2} = {}) => (
    {
        type: 'DECREMENT',
        decrementBy,

    }
)

const set = ({setTo = 20} = {}) => (
    {
        type: 'SET',
        setTo,
    }
)

const reset = ({resetTo = 0} = {}) => (
    {
        type: 'RESET',
        resetTo,
    }
)

const firstReducer = (state = {count: 0}, action) => {


    switch (action.type){
        case "INCREMENT":
            return{
                count: state.count + action.incrementBy
            }

        case "DECREMENT":
            return{
                count: state.count - action.decrementBy
            }

        case "SET":
            return{
                count: action.setTo
            }

        case "RESET": 
            return{
                count: action.resetTo
            }
            
        default:
            return state;
    }
}

const store = createStore(firstReducer);

store.subscribe(() => {
    console.log(store.getState())

});

store.dispatch(increment(5));
store.dispatch(decrement({decrementBy: 2}));
store.dispatch(set({setTo: 12}));
store.dispatch(reset({resetTo: 2}));
