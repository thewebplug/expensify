import React from 'react';
import {shallow} from 'enzyme';
import { AddExpensePage } from '../../components/AddExpensePage';
import { expect } from 'expect';
import expenses from '../fixtures/expenses'


let startAddExpense, navigate, wrapper

beforeEach(() => {
    startAddExpense = jest.fn();
    navigate = jest.fn();

    wrapper = shallow(<AddExpensePage startAddExpense={startAddExpense} navigate={navigate} />)
})

test('should render AddExpensePage correctly', () => {
    expect(wrapper).toMatchSnapshot();
})

test('should handle startAddExpense', () => {

    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[0]);

    expect(startAddExpense).toHaveBeenCalledWith(expenses[0]);
    expect(navigate).toHaveBeenCalledWith('/')
})
