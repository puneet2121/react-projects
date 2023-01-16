import React from 'react';

const Menu = (props) => {
  return <div className='section-center'>
    {props.items.map((menuItem) => {
      const {id, title, img, desc} = menuItem;
      return <article key={id} className="menu-item">
        <img className="photo" src={img} alt={title} />
      </article>
    })} 
  </div>
};

export default Menu;
