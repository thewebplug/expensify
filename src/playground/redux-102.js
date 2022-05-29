import { str } from "ajv-formats/node_modules/ajv";
import { createStore, combineReducers } from "redux";
import {v4 as uuidv4} from 'uuid';
// Expense Action Generators
const addExpense = (
    {
        description = '',
        note = '',
        amount = 0,
        createdAt
    } = {}
    ) => (
    {
        type : 'ADD_EXPENSE',
        expense: {
            id: uuidv4(),
            description,
            note,
            amount,
            createdAt
        }
    }
)

const removeExpense = ({id} = {}) => (
    {
        type: 'REMOVE_EXPENSE',
        id
    }
)

const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
})

//Expenses Reducer
const expensesReducerDefaultState = [];
const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            return [...state, action.expense]

        case 'REMOVE_EXPENSE':
           return state.filter((expense) => expense.id !== action.id);
        
        case 'EDIT_EXPENSE':
            return state.map((expense) => {
                if(expense.id === action.id){
                    return {...expense, ...action.updates}
                }
                else{
                    return expense;
                }
            });

        default:
            return state;
    }
};


// Expense Filter Generators

const setTextFilter = (text = '') => (
    {
        type: 'SET_TEXT',
        text
    } 

)

const sortbyAmount = () => (
    {
        type: 'SORT_BY_AMOUNT'
    }
)

const sortbyDate = () => (
    {
        type: 'SORT_BY_DATE'
    }
)

const setStartDate = (startDate) => (
    {
        type: 'SET_START_DATE',
        startDate
    }
)

const setEndDate = (endDate) => (
    {
        type: 'SET_END_DATE',
        endDate
    }
)
//Filters Reducer

const filterReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
}

const filterReducer = (state = filterReducerDefaultState, action) => {
    switch (action.type) {
    
        case 'SET_TEXT':
            return {...state, text: action.text}

        case 'SORT_BY_AMOUNT':
            return{
                ...state, sortBy: 'amount'
            }

        case 'SORT_BY_DATE':
            return{
                ...state, sortBy: 'date'
            }

        case 'SET_START_DATE':
            return{
                ...state, startDate: action.startDate
            }

        case 'SET_END_DATE':
            return{
                ...state, endDate: action.endDate
            }

        default:
            return state;
    }
}

// Store creation

const store = createStore(combineReducers(
    {
        expenses: expensesReducer,
        filters: filterReducer
}
));

const getVisibleExpenses = (expenses, {text, sortBy, startDate, endDate}) => {
    return expenses.filter((expense) => {
        return typeof startDate === 'number' &&
        expense.createdAt >= startDate &&
        typeof endDate === 'number' &&
        expense.createdAt <= endDate &&
        expense.description.toLowerCase().includes(text.toLowerCase());

        // const startDateMatch = typeof startDate === 'number' && expense.createdAt >= startDate;
        // const endDateMatch = typeof endDate === 'number' && expense.createdAt <= startDate;
        // return startDateMatch && endDateMatch;
    }).sort((a, b) => {
        if(sortBy === 'date'){
            return a.createdAt < b.createdAt ? 1 : -1;
        }
        else if(sortBy === 'amount') {
            return a.amount > b.amount ? -1 : 1;
        }
    })
}

store.subscribe(() => {
    const state = store.getState();
    console.log(store.getState());
    console.log(getVisibleExpenses(state.expenses, state.filters))
})

// store.dispatch(addExpense({description: 'Rent'}));

const itemTwo = store.dispatch(addExpense({description: 'SALEEM Jibril', note: 'jvk', amount: 890, createdAt: 99}));
const itemThree = store.dispatch(addExpense({description: 'WP Saleem', note: 'jvk', amount: 189, createdAt: 80}));

// const itemThree = store.dispatch(addExpense({description: 'Phone', amount: 0}));


// store.dispatch(removeExpense({id: itemTwo.expense.id}))

// store.dispatch(editExpense(itemThree.expense.id, {amount: 10}))

store.dispatch(setTextFilter('saleem'));
store.dispatch(sortbyAmount());
// store.dispatch(sortbyDate());
// store.dispatch(setStartDate(10));
// store.dispatch(setEndDate(100));

const demoState = {
    expenses: [{
     id: 'ndionfo323e2',
     description: 'January Rent',  
     note: 'Final Payment Mafo',
     amount: 54000,
     createdAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    }
};
