import moment from "moment";
import getVisibleExpenses from "../../selectors/expenses";
import expenses from '../fixtures/expenses'


test('should filter by text value', () => {
    const result = getVisibleExpenses(
        expenses,
        {
            text: 'water',
            sortBy: 'date',
            startDate: undefined,
            endDate: undefined
        }
    );

    expect(result).toEqual([expenses[0]])
})

test('should return data on or after start date', () => {
    const result = getVisibleExpenses(expenses, {
        text: '',
        startDate: moment(0).add(2, 'days').valueOf(),
        endDate: undefined,
        sortBy: 'date'
    });

    expect(result).toEqual([expenses[0], expenses[1]]);
})
test('should return data on or before end date', () => {
    const result = getVisibleExpenses(expenses, {
        text: '',
        startDate: undefined,
        endDate: moment(0).subtract(3, 'days').valueOf(),
        sortBy: 'date'
    });

    expect(result).toEqual([expenses[2]]);
})

test('should return data sorted by amount', () => {
    const result = getVisibleExpenses(expenses, {
        text: '',
        startDate: undefined,
        endDate: undefined,
        sortBy: 'amount'
    });

    expect(result).toEqual([expenses[1], expenses[2], expenses[0]]);
})

test('should return data sorted by date', () => {
    const result = getVisibleExpenses(expenses, {
        text: '',
        startDate: undefined,
        endDate: undefined,
        sortBy: 'date'
    });

    expect(result).toEqual([expenses[0], expenses[1], expenses[2]]);
})