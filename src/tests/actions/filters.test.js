import { expect } from "expect";
import moment from "moment";
import { setStartDate, setEndDate, setTextFilter, sortbyAmount, sortbyDate } from "../../actions/filters";


test('should generate startDate action object', () => {
    const action = setStartDate(moment(0));

    expect(action).toEqual({type: 'SET_START_DATE', startDate: moment(0)});
})


test('should generate endDate action object', () => {
    const action = setEndDate(moment(0));

    expect(action).toEqual({type: 'SET_END_DATE', endDate: moment(0)});
})

test('should generate setTextFilter action object', () => {
    const action = setTextFilter('bill');

    expect(action).toEqual({type: 'SET_TEXT', text: 'bill'});
})

test('should generate setTextFilter action object with default', () => {
    const action = setTextFilter();

    expect(action).toEqual({type: 'SET_TEXT', text: ''});
})

test('should generate sortbyAmount action object', () => {
    const action = sortbyAmount();

    expect(action).toEqual({type: 'SORT_BY_AMOUNT'})
})

test('should generate sortbyDate action object', () => {
    const action = sortbyDate();

    expect(action).toEqual({type: 'SORT_BY_DATE'})
})