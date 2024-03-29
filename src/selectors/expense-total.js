const selectExpenseTotal = (expenses) => {
    if(expenses.length > 0) {
        return expenses.map((expense) => expense.amount)
        .reduce((a, b) => a + b, 0)
    }else{
        return 0;
    }
}

export default selectExpenseTotal;