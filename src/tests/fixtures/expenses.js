import moment from "moment"

const expenses = [
    {
        id:"44",
        description: 'water bill exp',
        amount: 1000,
        note: 'Nil',
        createdAt: moment(0).add(10, 'days').valueOf()
    },
    {
        id:"88",
        description: 'utility bill exp',
        amount: 2000,
        note: 'Nil',
        createdAt: moment(0).add(4, 'days').valueOf()
    },
    {
        id:"89",
        description: 'mend exp',
        amount: 1400,
        note: 'Nil',
        createdAt: moment(0).subtract(5, 'days').valueOf()
    }
];

export default expenses;