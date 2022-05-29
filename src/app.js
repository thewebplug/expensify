import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import 'normalize.css/normalize.css';
import './styles/style.scss';
import configureStore from './store/configureStore'
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import { Provider } from 'react-redux';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css'


const store = configureStore();

store.dispatch(addExpense({description: 'Water Bill', amount: 8000, createdAt: 50804}))
store.dispatch(addExpense({description: 'Light Bill', amount: 1000, createdAt: 400898009}))
store.dispatch(addExpense({description: 'Gas Bill', amount: 59500, createdAt: 62009}))
store.dispatch(addExpense({description: 'Paper Bill', amount: 818, createdAt: 99900909969}))

const state = store.getState();
console.log(getVisibleExpenses(state.expenses, state.filters))




const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)


ReactDOM.render(jsx, document.getElementById('app'));