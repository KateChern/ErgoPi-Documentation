import DocElement from './docElement';
import data from './data';
import styles from'./Documentation.module.css';
import React, { Fragment} from 'react';
import ScrollBar from '../UI/scrollbar';
import ScrollToTop from '../UI/scrollbutton';

function Documentation() {

    const refs = data.reduce((acc, value) => {
        acc[value.id] = React.createRef();
        return acc;
      }, {});
      
    const handleClick = id =>{
    if( +id < Object.keys(refs).length ){
      refs[id+1].current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });}}


    return (
            <Fragment>
                <p className={styles.title} >GETTING STARTED WITH ErgoPi</p>
                <ScrollBar />
                <ul className={styles.documentationList}>
                    {data.map(element => 
                    
                    <DocElement onClick={ handleClick} refs={refs} classN = {element.id%2!==0  ?  'odd' : 'even' }  key={element.id} data = {element } />
                        
                    )}
                </ul>
               <ScrollToTop />
            </Fragment>
    )
}


export default Documentation;