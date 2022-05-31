import React from 'react';
import getVisibleExpenses from '../selectors/expenses';
import selectExpenseTotal from '../selectors/expense-total';
import { connect } from 'react-redux';
import numeral from 'numeral';


export const ExpenseSummary = (props) => {
    const totalAmount = selectExpenseTotal(props.expenses)
    const expenseWord = props.expenses.length === 1 ? 'expense' : 'expenses';
    return (
        <div>
            <h3>Viewing {props.expenses.length} {expenseWord} totalling {numeral(totalAmount / 100).format('$0,0.00')}</h3>
        </div>
    )
}


const mapStateToProps = (state) => {
    return{
        expenses: getVisibleExpenses(state.expenses, state.filters)
    }
}


export default connect(mapStateToProps)(ExpenseSummary);