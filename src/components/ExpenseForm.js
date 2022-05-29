import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';



const now = moment();
console.log(moment());
class ExpenseForm extends React.Component {
    state = {
        description: this.props.currentExpense ? this.props.currentExpense.description : '',
        note: this.props.currentExpense ? this.props.currentExpense.note : '',
        amount: this.props.currentExpense ? (this.props.currentExpense.amount / 100).toString() : '',
        createdAt:  this.props.currentExpense ? moment(this.props.currentExpense.createdAt) : moment(),
        calenderFocused: false,
        error: undefined
    }

    onDescriptionChange = (e) => {
        this.setState(() => ({description: e.target.value}))
    }

    onNoteChange = (e) => {
        this.setState(() => ({note: e.target.value}))
    }
    onAmountChange = (e) => {
        const amount = e.target.value;
        if(amount.match(/^\d+(\.\d{0,2})?$/)) {
            this.setState(() => ({amount}))
        }
    }

    onDateChange = (createdAt) => {
        if(createdAt) {
            this.setState(() => ({createdAt}));
        }
    }

    onFocusChange = ({focused}) => {
        this.setState(() => ({calenderFocused: focused}));
    }

    onSubmit = (e) => {
        e.preventDefault();

        if(!this.state.description || !this.state.amount){
            const error = 'Oops! Something went wrong'
            this.setState(() =>({error}))
        }
        else{
            this.setState(() => ({error: ''}))
            this.props.onSubmit(({
                description: this.state.description,
                amount: parseFloat(this.state.amount, 10) * 100,
                createdAt: this.state.createdAt.valueOf(),
                note: this.state.note
            }))
        }
    } 


    render() {
        return(
            <div>
               {this.state.error && <p>{this.state.error}</p>}
               <form onSubmit={this.onSubmit}>
                <input 
                    type="text" 
                    placeholder="Description" 
                    autoFocus  
                    onChange={this.onDescriptionChange}
                    value={this.state.description}
                />
                <input 
                    type="number" 
                    placeholder="Amount" 
                    onChange={this.onAmountChange}
                    value={this.state.amount}
                />
                <SingleDatePicker
                    date={this.state.createdAt}
                    onDateChange={this.onDateChange}
                    focused={this.state.calenderFocused}
                    onFocusChange ={this.onFocusChange}    
                    numberOfMonths={1}
                    isOutsideRange={(day) => false}
                />
                <textarea
                    placeholder="Add a for your expense(optional)" 
                    onChange={this.onNoteChange}
                    value={this.state.note}
                    >
                </textarea>
                <button>Add Expense</button>
               </form>
            </div>
        )
        
    }
}

export default ExpenseForm;