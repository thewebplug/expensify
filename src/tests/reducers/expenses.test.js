import expensesReducer from "../../reducers/expenses";
import expenses from '../fixtures/expenses'


test('see if default is set', () => {
    const result = expensesReducer(undefined, {type: '@@INIT'})

    expect(result).toEqual([]);

})

test('should remove expense by id', () => {
    const result = expensesReducer(expenses, {id: expenses[0].id, type: 'REMOVE_EXPENSE'})
    
    expect(result).toEqual([expenses[1], expenses[2]]);
})

test('should not remove expense by id', () => {
    const result = expensesReducer(expenses, {id: "-1", type: 'REMOVE_EXPENSE'})
    
    expect(result).toEqual(expenses);
})


test('should add expense', () => {
    const tempExpense = {description: 'November Rent', amount: 122, note: 'Nil', createdAt: 9876567}
    const result = expensesReducer(expenses, {type: 'ADD_EXPENSE', expense: tempExpense})
    
    expect(result).toEqual([...expenses, tempExpense]);
})


test('should edit expense by id', () => {
    const result = expensesReducer(expenses, {type: 'EDIT_EXPENSE', id: expenses[0].id, updates: {description: 'December Rent'}})
    
    expect(result[0].description).toBe('December Rent');
})

test('should not edit expense by id', () => {
    const result = expensesReducer(expenses, {type: 'EDIT_EXPENSE', id: "-1", updates: {description: 'December Rent'}})
    
    expect(result).toEqual(expenses);
})
