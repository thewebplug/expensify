import { addExpense, editExpense, removeExpense } from "../../actions/expenses";


test('should set up removeExpense action object', () => {
    const action = removeExpense({id: '1234r'});

    expect(action).toEqual({type: 'REMOVE_EXPENSE', id: '1234r'});
})

test('should setup editExpense action object', () => {
    const action = editExpense('345', {description: 'water bill'});

    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '345',
        updates:{
            description: 'water bill'
        }
        
    })
})

test('should setup addExpense action object', () => {
    const action = addExpense({
        description: 'Utility Bill',
        note: 'Nill',
        amount: 200,
        createdAt: 90000
    })

    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            id: expect.any(String),
            description: 'Utility Bill',
            note: 'Nill',
            amount: 200,
            createdAt: 90000
        }
    })
})

test('should setup addExpense action object with default values', () => {
    const action = addExpense()

    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            id: expect.any(String),
            description: '',
            note: '',
            amount: 0,
            createdAt: undefined
        }
    })
})