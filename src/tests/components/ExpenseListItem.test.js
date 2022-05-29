import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseListItem } from '../../components/ExpenseListItem';
import expenses from '../fixtures/expenses';


test('should render ExpenseListItem with expenses', () => {
    const wrapper = shallow(<ExpenseListItem expenses={expenses} />)
    expect(wrapper).toMatchSnapshot();
})


test('should render ExpnseListItem with no expenses', () => {
    const wrapper = shallow(<ExpenseListItem expenses={[]}/>)
    expect(wrapper).toMatchSnapshot();
})