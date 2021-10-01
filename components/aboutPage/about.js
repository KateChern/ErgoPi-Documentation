import { Fragment } from "react";
import styles from './about.module.css';

function About() {
    return (
        <Fragment>
            <p className={styles.title}>About ErgoPi</p>
            <p className={styles.description}>Ergo builds advanced cryptographic features and radically new DeFi functionality on the rock-solid foundations laid by a decade of blockchain theory and development.</p>
        </Fragment>
    )
}


export default About;