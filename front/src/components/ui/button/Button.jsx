import React from 'react';
import styles from "./button.module.scss"

const Button = ({children,type='text', cl='main', cb}) => {
    return (
        <button onClick={cb} type={type} className={`${styles.btn} ${styles[cl]}`}>
            {children}
        </button>
    );
};

export default Button;