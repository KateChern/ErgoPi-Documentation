import { Fragment } from "react/";
import React from 'react';
import Rasberry from  '../../public/Frame.svg'
import styles from './HomePage.module.css'
import Link from 'next/link'


function HomePage(props) {
    return (
        <Fragment>
            <div className={styles.container}>
                <p className={styles.title}>Ergo PI Services</p>
                <div className={styles.innerContainer}>
                    <Rasberry/>
                    <p className={styles.description}>Ergo builds advanced cryptographic features and radically new DeFi functionality on the rock-solid foundations laid by a decade of blockchain theory and development.</p>
                </div>
            </div>
            <div className={styles.button}>
                 <Link href="/about" exact > Learn more </Link>      
            </div>
        </Fragment>
    )
}

export default HomePage;