import React, { useState } from 'react'
import ExpenseItem from './ExpenseItem'
import Card from '../UI/Card'
import './Expenses.css'
import ExpensesFilter from './ExpensesFilter'
export default function Expenses(props) {
    const [defaultYears, setDefaultyears] = useState('2020')

    const filterChangeHandler = filteredYear => {
        console.log("expenses")
        setDefaultyears(filteredYear)
        console.log(filteredYear)
    }
    const  fillTeredExpense  = props.items.filter(expense=>{
        return expense.date.getFullYear().toString() === defaultYears
    })

    let expenseContent = <p> no expense data</p>

    if (fillTeredExpense.length > 0){
        expenseContent = fillTeredExpense.map(expense => <ExpenseItem 
            key={expense.id}
            title={expense.title} 
            amount={expense.amount} 
            date={expense.date} />)
    }

    return (
        <div>
        <Card className='expenses'>
            <ExpensesFilter onFilteredDefault={defaultYears} onFilteredChange={filterChangeHandler} />
            {expenseContent}
        </Card>
        </div>
    )
}
