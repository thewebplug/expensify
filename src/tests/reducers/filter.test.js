import moment from 'moment';
import filterReducer from '../../reducers/filters';


const filterReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
};

test('should show Reducer defaults are set' ,() => {
    const result = filterReducer(undefined, {type: '@@INIT'})

    expect(result).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    });
})
test('should set textFilter' ,() => {
    const result = filterReducer(filterReducerDefaultState,{type: 'SET_TEXT', text: 'bill'})

    expect(result).toEqual({...filterReducerDefaultState, text: 'bill'});
})

test('should set sortyBy to amount', () => {
    const result = filterReducer(filterReducerDefaultState, {type: 'SORT_BY_AMOUNT'});

    expect(result).toEqual({...filterReducerDefaultState, sortBy: 'amount'});
})

test('should set sortyBy to date', () => {
    const tempState = {
        text: '',
        sortBy: 'amount',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    }
    const result = filterReducer(tempState, {type: 'SORT_BY_DATE'});

    expect(result).toEqual({...tempState, sortBy: 'date'});
})

test('should set startDate', () => {
    const result = filterReducer(filterReducerDefaultState, {type: 'SET_START_DATE', startDate: moment(0).add(3, 'days').valueOf()})

    expect(result).toEqual({...filterReducerDefaultState, startDate: moment(0).add(3, 'days').valueOf()})
})


test('should set endDate', () => {
    const result = filterReducer(filterReducerDefaultState, {type: 'SET_END_DATE', endDate: moment(0).add(9, 'days').valueOf()})

    expect(result).toEqual({...filterReducerDefaultState, endDate: moment(0).add(9, 'days').valueOf()})
})