import React from 'react';

const Categories = (props) => {
  return <div className='btn-container'>
    <button className='filter-btn' onClick={() => props.filterItems('all')}>
      all
    </button>
    <button className='filter-btn' onClick={() => props.filterItems('breakfast')}>
      breakfast
    </button>
    <button className='filter-btn' onClick={() => props.filterItems('lunch')}>
      lunch
    </button>
    <button className='filter-btn' onClick={() => props.filterItems('shakes')}>
    shakes
    </button>
  </div>
};

export default Categories;
