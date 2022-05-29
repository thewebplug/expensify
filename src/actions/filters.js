
export const setTextFilter = (text = '') => (
    {
        type: 'SET_TEXT',
        text
    } 

)

export const sortbyAmount = () => (
    {
        type: 'SORT_BY_AMOUNT'
    }
)

export const sortbyDate = () => (
    {
        type: 'SORT_BY_DATE'
    }
)

export const setStartDate = (startDate) => (
    {
        type: 'SET_START_DATE',
        startDate
    }
)

export const setEndDate = (endDate) => (
    {
        type: 'SET_END_DATE',
        endDate
    }
)