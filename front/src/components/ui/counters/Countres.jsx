import React from 'react';
import styles from "./counters.module.scss"

const Counters = ({minutes = '0', workouts = '0', kgs = '0'}) => {
    return (
        <div className={styles.counters}>
            <div className={styles.counterItem}>
                <div className={styles.itemKey}>Minutes</div>
                <div className={styles.itemValue}>{minutes}</div>
            </div>
            <div className={styles.counterItem}>
                <div className={styles.itemKey}>Workouts</div>
                <div className={styles.itemValue}>{workouts}</div>
            </div>
            <div className={styles.counterItem}>
                <div className={styles.itemKey}>Kgs</div>
                <div className={styles.itemValue}>{kgs}</div>
            </div>
        </div>
    );
};

export default Counters;