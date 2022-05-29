import React from 'react';
import {shallow} from 'enzyme';
import { EditExpensePage } from '../../components/EditExpensePage';
import expenses from '../fixtures/expenses';

let editExpense, removeExpense, navigate, useParams, wrapper

beforeEach(() => {
    editExpense = jest.fn();
    removeExpense = jest.fn();
    navigate = jest.fn();
    useParams = {id: expenses[0].id}



    wrapper = shallow(<EditExpensePage expenses={expenses} editExpense={editExpense} removeExpense={removeExpense} navigate={navigate} useParams={useParams} />)
})

test('should render EditExpensePage correctly', () => {
    expect(wrapper).toMatchSnapshot();
})

test('should trigger EditExpensePage function onSubmit correctly', () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[0]);
    expect(editExpense).toHaveBeenCalledWith(expenses[0].id, expenses[0]);
    expect(navigate).toHaveBeenCalledWith('/')
})


test('should trigger EditExpensePage function onClick correctly', () => {
    wrapper.find('button').simulate('click');
    expect(removeExpense).toHaveBeenCalledWith(expenses[0].id);
    expect(navigate).toHaveBeenCalledWith('/')
})
