import React from 'react';
import { shallow } from "enzyme";
import { ExpenseListFilters } from "../../components/ExpenseListFilters";
import {filters, defaultFilters} from '../fixtures/filters'

let setStartDate, setEndDate, setTextFilter, sortBy, wrapper, wrapper2;

beforeEach(() => {
    setStartDate = jest.fn();
    setEndDate = jest.fn();
    setTextFilter = jest.fn();
    sortBy = jest.fn();

    wrapper = shallow(<ExpenseListFilters filters={defaultFilters} setStartDate={setStartDate} setEndDate={setEndDate} setTextFilter={setTextFilter} sortBy={sortBy}/>)

    wrapper2 = shallow(<ExpenseListFilters filters={filters} setStartDate={setStartDate} setEndDate={setEndDate} setTextFilter={setTextFilter} sortBy={sortBy}/>)
})

test('should render ExpenseListFilters correctly with default filters', () => {
    expect(wrapper).toMatchSnapshot();
})

test('should render ExpenseListFilters correctly with set filters', () => {
    wrapper.setProps({filters: filters})
    expect(wrapper2).toMatchSnapshot();
})

test('should call SetTextFilter with correct value', () => {
    wrapper.find('input').at(0).simulate('change', {
        target: {value: filters.text}
    })
    expect(setTextFilter).toHaveBeenCalledWith(filters.text);
})
test('should call sortBy with correct value', () => {
    wrapper.find('select').simulate('change', {
        target: {value: filters.sortBy}
    })
    expect(sortBy).toHaveBeenCalledWith(filters.sortBy);
})
test('should call setStartDate with correct value', () => {
    wrapper.find('withStyles(DateRangePicker)').prop('onDatesChange')({startDate: filters.startDate, endDate: filters.endDate})
    expect(setStartDate).toHaveBeenCalledWith(filters.startDate);
    expect(setEndDate).toHaveBeenCalledWith(filters.endDate);
})

test('should change calenderFocused to true', () => {
    wrapper.find('withStyles(DateRangePicker)').prop('onFocusChange')(filters.startDate)
    expect(wrapper.state('calenderFocused')).toBe(filters.startDate)
})