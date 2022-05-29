import React from 'react';
import { shallow } from 'enzyme';
import ExpenseForm from '../../components/ExpenseForm';
import expenses from '../fixtures/expenses'
import moment from 'moment';
import { expect } from '@jest/globals';


test('should render ExpenseForm', () => {
    const wrapper = shallow(<ExpenseForm />)
    expect(wrapper).toMatchSnapshot();
    
})

test('should render ExpenseForm with data', () => {
    const wrapper = shallow(<ExpenseForm currentExpense={expenses[0]}/>)
    expect(wrapper).toMatchSnapshot();

})// Note this test does not Add Expense to the store or Edit any Expense it just populates the input feilds of the ExpenseForm with data

test('should render error for invalid form submition', () => {
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('form').simulate('submit', {
        preventDefault: () => {}
    });
    expect(wrapper.state('error').length).toBeGreaterThan(0);
    expect(wrapper).toMatchSnapshot();

})

test('should set new description on input change', () => {
    const wrapper = shallow(<ExpenseForm />);

    wrapper.find('input').at(0).simulate('change', {
        target: {
            value: 'New Description'
        }
    })
    expect(wrapper.state('description')).toBe('New Description');
    expect
})

test('should set new note on input change', () => {
    const wrapper = shallow(<ExpenseForm />);

    wrapper.find('textarea').simulate('change',  {
        target: {value: 'New Note Here!'}
    })
    expect(wrapper.state('note')).toBe('New Note Here!');
})


test('should set amount if input is valid', () => {
    const wrapper = shallow(<ExpenseForm />)

    wrapper.find('input').at(1).simulate('change', {
        target: {value: '234'}
    })
    expect(wrapper.state('amount')).toBe('234');
})



test('should set amount if input is valid', () => {
    const wrapper = shallow(<ExpenseForm />)

    wrapper.find('input').at(1).simulate('change', {
        target: {value: 'hoo'}
    })
    expect(wrapper.state('amount')).not.toBe('234');
})

test('should call onSubmit with correct expenses', () => {
    const onSubmitSpy = jest.fn();
    const tempExpense = {
        description: expenses[0].description,
        amount: expenses[0].amount,
        note: expenses[0].note,
        createdAt: expenses[0].createdAt
    };
    const wrapper = shallow(<ExpenseForm currentExpense={tempExpense} onSubmit={onSubmitSpy}/>)

    wrapper.find('form').simulate('submit', {
        preventDefault: () => {}
    })

    expect(wrapper.state('error')).toBe('');
    expect(onSubmitSpy).toHaveBeenCalledWith(tempExpense);
})

test('should set new date on date changes',() => {
    const wrapper = shallow(<ExpenseForm />)
    wrapper.find('withStyles(SingleDatePicker)').prop('onDateChange')(moment());
    expect(wrapper.state('createdAt')).toEqual(moment());
})

test('should set focused to true', () => {
    const wrapper = shallow(<ExpenseForm />);

    wrapper.find('withStyles(SingleDatePicker)').prop('onFocusChange')({focused: true});

    expect(wrapper.state('calenderFocused')).toBe(true);
})