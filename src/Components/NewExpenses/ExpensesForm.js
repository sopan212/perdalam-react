import React, { useState } from 'react'
import './ExpensesFrom.css'
export default function ExpensesForm(props) {
const [enteredTitle,setEnteredTitle] = useState('')
const [enteredAmount,setEnteredAmount] = useState('')
const [enteredDate,setEnteredDate] = useState('')


const titleChangeHandler =(e)=>{
 setEnteredTitle(e.target.value)
}
const amountChangeHandler =(e)=>{
setEnteredAmount(e.target.value)
}
const dateChangeHandler =(e)=>{
setEnteredDate(e.target.value)
}
const submitHandler =(e)=>{
    e.preventDefault();
    const expenses ={
        title:enteredTitle,
        amount:enteredAmount,
        date: new Date(enteredDate)
    }

    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("")

    props.onSaveExpenseData(expenses)
}
    return (
        <div>
            <form onSubmit={submitHandler} >
                <div className='new-expense__controls'>
                    <div className='new-expense__control'>
                        <label>Title</label>
                        <input type="text" name='title' value={enteredTitle} onChange={titleChangeHandler}/>
                    </div>
                    <div className='new-expense__control'>
                        <label>Amount</label>
                        <input type="number" min="0.01" step="0.01" name='amount' value={enteredAmount} onChange={amountChangeHandler}/>
                    </div>
                    <div className='new-expense__control'>
                        <label>Date</label>
                        <input type="date" min="2019-01-01" max="2023-12-31" name='date' value={enteredDate} onChange={dateChangeHandler}/>
                    </div>
                </div>
                <button type='submit' className='new-expense__actions'>Add Expenses</button>
            </form>
        </div>
    )
}
