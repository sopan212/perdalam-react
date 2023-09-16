import React from 'react'
import ExpenseForm from './ExpensesForm'
import './NewExpenses.css'
export default function NewExpenses (props) {
const saveExpenseDatahandler =(enteredExpenseData)=>{
  const expenseData = {
    ...enteredExpenseData,
    id:Math.random().toString()
  };
  props.onAddExpense(expenseData)
};

  return (
    <div className='new-expense'>
    <ExpenseForm onSaveExpenseData={saveExpenseDatahandler}/>
    </div>
  )
}
