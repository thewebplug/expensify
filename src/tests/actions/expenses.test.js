import { expect } from "@jest/globals";
import { addExpense, editExpense, removeExpense, startAddExpense } from "../../actions/expenses";
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import expenses from '../fixtures/expenses'
import db from '../../firebase/firebase'
import { ref, onValue, onlyOnce } from "firebase/database";

const createMockStore = configureMockStore([thunk]);


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
            description: 'Utility Bill',
            note: 'Nill',
            amount: 200,
            createdAt: 90000
        }
    })
})

test('should add expense to database and store', (done) => {
    const store = createMockStore({})
    const expenseData = {
        description: "mouse",
        amount: 3000,
        note: "it has lights",
        createdAt: 1000
    };
    store.dispatch(startAddExpense(expenseData)).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type : 'ADD_EXPENSE',
            expense: {
                id: expect.any(String),
                ...expenseData
            }
        });
        

        onValue(ref(db, `${actions[0].expense.id}`), (snapshot) => {
            expect(snapshot.val()).toEqual(expenseData)
            done();
        });
    })
})

test('should add expense with defaults to database and store', (done) => {

    const store = createMockStore({})
    const expenseDefault = {
        description: "",
        amount: 0,
        note: "",
        createdAt: 0
    };
    store.dispatch(startAddExpense()).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type : 'ADD_EXPENSE',
            expense: {
                id: expect.any(String),
                ...expenseDefault
            }
        });
        

        onValue(ref(db, `${actions[0].expense.id}`), (snapshot) => {
            expect(snapshot.val()).toEqual(expenseDefault)
            done();
        });
    })

})