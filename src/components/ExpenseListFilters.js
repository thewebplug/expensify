import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter, sortbyAmount, sortbyDate,  setStartDate, setEndDate} from '../actions/filters';
import { DateRangePicker } from 'react-dates';

export class ExpenseListFilters extends React.Component{
    state = {
        calenderFocused: null,
    }
    onDatesChange = ({startDate, endDate}) => {
        this.props.setStartDate(startDate);
        this.props.setEndDate(endDate);
    }
    onFocusChange = (calenderFocused) => {
        this.setState(({calenderFocused}));
    }
    onTextChange = (e) => this.props.setTextFilter(e.target.value)
    onSortChange = (e) => this.props.sortBy(e.target.value)
    render() {
        return (
            <div>
            <input 
                type="text" 
                value={this.props.filters.text} 
                onChange={this.onTextChange} 
            />
            <select 
                onChange={this.onSortChange}
            >
                <option value="date">Date</option>
                <option value="amount">Amount</option>
            </select>

            <DateRangePicker 
                startDateId="hbghj"
                endDateId="jjbiukb"
                startDate={this.props.filters.startDate}
                endDate={this.props.filters.endDate}
                onDatesChange={this.onDatesChange}
                focusedInput={this.state.calenderFocused}
                onFocusChange={this.onFocusChange}
                numberOfMonths={1}
                isOutsideRange={() => false}
                showClearDates={true}
            />
        </div>
        )
    }
}



const mapDispatchToProps = (dispatch) => ({
    setStartDate: (startDate) => dispatch(setStartDate(startDate)),
    setEndDate: (endDate) => dispatch(setEndDate(endDate)),
    setTextFilter: (value) => dispatch(setTextFilter(value)),
    sortBy: (value) => dispatch(value ==='amount' ? sortbyAmount() : sortbyDate())
})


const mapStateToProps = (state) => ({
        filters: state.filters
    })

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilters);
