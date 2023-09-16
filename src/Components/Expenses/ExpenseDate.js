import React from 'react'
import './ExpenseDate.css'
export default function ExpenseDate(props) {
    const Month = props.date.toLocaleString("id-ID",{month:"long"})
    const Day = props.date.toLocaleString("id-ID",{day:'2-digit'})
    const Year= props.date.getUTCFullYear()
  return (
    <div className='expense-date'>
    <div className='expense-date__month'>{Month}</div>
    <div className='expense-date__day'>{Day}</div>
    <div className='expense-date__year'>{Year}</div>
    </div>
  )
}
