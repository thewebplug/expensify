import React from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { editExpense, removeExpense } from '../actions/expenses';
import { useNavigate } from 'react-router';




export const EditExpensePage = (props) => {
        const {id} = props.useParams;

        const selectedExpense = props.expenses.find((expense) => expense.id === id);

        const onSubmit = (expense) => {
                props.editExpense(selectedExpense.id, expense)
                props.navigate('/')
        }

        const onClick = () => {
                props.removeExpense(selectedExpense.id);
                props.navigate('/')
        }
        return(
                <div>
                        <ExpenseForm
                                currentExpense={selectedExpense} 
                                onSubmit={onSubmit}
                        />
                        <button onClick={onClick}>Remove</button>
                </div>
        )
}
const mapDispatchToProps = (dispatch) => ({
        
        editExpense: (id, expense) => dispatch(editExpense(id, expense)),
        removeExpense: (id) => dispatch(removeExpense({id})),
        navigate: useNavigate(),
        useParams: useParams()
})

const mapStateToProps = (state) => ({
        expenses: state.expenses
})

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);