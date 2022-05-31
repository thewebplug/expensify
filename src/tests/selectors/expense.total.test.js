import { expect } from "@jest/globals";
import selectExpenseTotal from "../../selectors/expense-total";
import expenses from '../fixtures/expenses'
import moment from 'moment';


test('should return 0 if no expense', () => {
    const emptyexpenses = [];
    const result = selectExpenseTotal(emptyexpenses)

    expect(result).toBe(0);
})


test('should return total for a single expense', () => {
    const singleExpense = [
        {
            id:"44",
            description: 'water bill exp',
            amount: 1000,
            note: 'Nil',
            createdAt: moment(0).add(10, 'days').valueOf()
        }
    ]

    const result = selectExpenseTotal(singleExpense)
    expect(result).toBe(singleExpense[0].amount)
})

test('should return total for multiple expenses', () => {
    const result = selectExpenseTotal(expenses);
    expect(result).toBe(4400);
})