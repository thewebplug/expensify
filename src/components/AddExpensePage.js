import React from 'react';
import ExpenseForm from './ExpenseForm';
import { connect } from 'react-redux';
import { addExpense } from '../actions/expenses';
import { useNavigate } from 'react-router-dom';

export const AddExpensePage = (props) => {
    const onSubmit=(expense) => {
        props.onSubmit(expense);
        props.navigate('/');
    }
    return(
        <div>
            <h1>Add Expenses</h1>
            <ExpenseForm onSubmit={onSubmit}/>
        </div>
    )
};

const mapDispatchToProps = (dispatch) => ({
        onSubmit: (expense) => dispatch(addExpense(expense)),
        navigate: useNavigate()
    })

export default connect(undefined, mapDispatchToProps)(AddExpensePage);