import React from 'react';
import { connect } from 'react-redux';
import getVisibleExpenses from '../selectors/expenses';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';


export const ExpenseListItem = (props) => {

    return (
        props.expenses.length === 0 ? 
        <p>No Expenses</p> :
        props.expenses.map((expense) => 

            <div key={expense.id}>
                <Link to={`edit/${expense.id}`}><h3>{expense.description}</h3></Link>
                <p>Amount: {numeral(expense.amount / 100).format('$0,0.00')}</p>
                <p>Created At: {moment(expense.createdAt).format('MMMM Do, YYYY')}</p>
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