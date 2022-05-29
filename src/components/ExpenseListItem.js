import React from 'react';
import { connect } from 'react-redux';
import getVisibleExpenses from '../selectors/expenses';
import { Link } from 'react-router-dom';



export const ExpenseListItem = (props) => {

    return (
        props.expenses.length === 0 ? 
        <p>No Expenses</p> :
        props.expenses.map((expense) => 

            <div key={expense.id}>
                <Link to={`edit/${expense.id}`}><h3>{expense.description}</h3></Link>
                <p>Amount: {expense.amount}</p>
                <p>Created At: {expense.createdAt}</p>
            </div>
    )

    )
}


const mapStateToProps = (state) => {
    return {
        expenses: getVisibleExpenses(state.expenses, state.filters)
    }

}

export default connect(mapStateToProps)(ExpenseListItem);