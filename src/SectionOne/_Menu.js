  import React from 'react';
  import { ReactComponent as Logo } from '../images/logo.svg';
  import './_Menu.css'

  function MenuItems() {
    const list = ['About', 'Services', 'Projects', 'Contact']
    const listItems = list.map((list) => 
      <li key={list.toString()}><a>{list}</a></li>
    );

    return listItems;
  }

  function Menu() {
    return (
      <div className="menu">
        <Logo />
        <ul><MenuItems /></ul>
      </div>
    );
  }

  export default Menu;