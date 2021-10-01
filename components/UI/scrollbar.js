import React from 'react';
import classes from './scrollbar.module.css'

import data from '../documentation/data';


function ScrollBar () {
    
   
      return (
          <ul className ={`${ classes.scrollbar} ${classes.container} ${ classes['scrollbar-primary'] } ${ classes[ "cart-items"]} `}
              >
              
              {data.map(item => <a key={item.title} href={`#${item.title}`}>{item.title} </a>)} 
          </ul>
          
      
      )
    }


export default ScrollBar;