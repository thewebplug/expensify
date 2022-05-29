import React from 'react';
import ExpenseList from '../../components/ExpenseList';
import { shallow } from 'enzyme';


test('should return ExpenseList with ExpenseListItems', () => {
    const wrapper = shallow(<ExpenseList />);
    expect(wrapper).toMatchSnapshot();
})
