import React from 'react';

import './ExpensesFilter.css';

export default function ExpensesFilter(props) {
  const filteredYearsHandler =(e)=>{
    props.onFilteredChange(e.target.value)
    
  }
  return (

    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <select value={props.onFilteredDefault} onChange={filteredYearsHandler}>
          <option value='2022'>2022</option>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
          <option value='2019'>2019</option>
        </select>
      </div>
    </div>
  
  );
};

