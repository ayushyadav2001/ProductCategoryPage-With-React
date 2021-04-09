import React from 'react';
import classes from './TopBar.module.css';

const Topbar= () => {
    return (
        <header>
        <nav className={classes.Topbar}>
         <img src="https://seedformations.co.uk/wp-content/uploads/2019/07/Amazon-Logo.png" />
       </nav>
       </header>
    );

}
export default Topbar;