import React from 'react';
import { shallow } from "enzyme";
import {ExpenseSummary} from '../../components/ExpenseSummary';
import expenses from '../fixtures/expenses'

test('should return ExpenseSummary with expenses', () => {
    const wrapper = shallow(<ExpenseSummary expenses={expenses} />)
    expect(wrapper).toMatchSnapshot();
})

test('should return ExpenseSummary without expenses', () => {
    const emptyExpense = []
    const wrapper = shallow(<ExpenseSummary expenses={emptyExpense} />)
    expect(wrapper).toMatchSnapshot();
})