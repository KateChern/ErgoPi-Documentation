import { NavLink } from "./NavLink";
import React from 'react';
import styles from './MainNavigation.module.css'
import Icon from  '../../public/Icon.svg';


function MainNavigation() {

    return (
     
        <nav className={styles.navigation}>
            <div className={styles.titleLogo}>
                <NavLink href="/" exact className={`${styles.navItem} ${styles.navLink}`}>ergo pi</NavLink>
                <Icon />
            </div>       
          <ul>  
            <li>
              <NavLink href="/about" exact className="nav-item nav-link">About</NavLink>            
            </li>
            <li>
              <NavLink href="/documentation" exact className="nav-item nav-link">Documentation</NavLink>            
            </li>
          </ul>
        </nav>
    
    );
  }
  
  export default MainNavigation;

 