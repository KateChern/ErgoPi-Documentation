import CheckIconNC from '../../public/check-mark-NOT-completed.svg'
import CheckIcon from '../../public/check-mark-completed.svg'
import styles from './DocElement.module.css';
import {dracula} from 'react-syntax-highlighter/dist/cjs/styles/prism';
import { PrismAsync as SyntaxHighlighter } from "react-syntax-highlighter";
import { useState, useEffect } from 'react';
import React from 'react';




function DocElement(props) {
    const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
    const [completed, setCompleted] = useState(false);

    useEffect(() => {      
        const storedKeys = Object.keys(localStorage);
        if (storedKeys.length > 0) {
            const item = localStorage.getItem(props.data.id);
            if(item) {
                setCompleted(true);
            }
        } 
      }, []);
    

    const toggleCheck = () => {
       
        if (!completed) {
            localStorage.setItem(props.data.id, 'completed');
            setCompleted(true)
            setBtnIsHighlighted(true)
            props.onClick(props.data.id)
          

            const timer = setTimeout(() => {
                setBtnIsHighlighted(false);
            }, 200);
            return () => {
                clearTimeout(timer);
            };

        } else if(completed) {
            localStorage.removeItem(props.data.id);
            setCompleted(false);
        }
    }
    const btnClasses = `${completed ? styles.buttonC : styles.buttonNC} ${btnIsHighlighted ? styles.bump : ''}`;

    let icon = completed   ? <CheckIcon onClick={toggleCheck} role='button' className={btnClasses} />  : 
                             <CheckIconNC onClick={toggleCheck} role='button' className={btnClasses} />;
   
    
    
    return (
        <li ref={props.refs[props.data.id]} id={props.data.title} >
            <div className={styles.container}>                          
                <p className={`${styles.title} ${styles[props.classN]} `}>{props.data.title}</p>
                <p className={styles.description}>{props.data.description}</p>
                <SyntaxHighlighter
                    style={dracula}
                    language="jsx"
                    children={props.data.code}
                />
            </div>
            <div className={styles[props.classN]}>
               {icon}
            </div>
        </li>      
    )
}

export default DocElement;

