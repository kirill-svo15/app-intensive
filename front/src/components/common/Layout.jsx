import React from 'react';
import Header from "./header/Header";
import styles from "./layout.module.scss"

const Layout = ({children,heading='', bgImage,otherPage='', type='home'}) => {
    return (
        <div className={`${styles.wrapper} ${styles[type]} ${styles[otherPage]}`} style={{backgroundImage: `url(${bgImage})`}}>
            <Header/>
            {heading && <h1 className={styles.heading}>{heading}</h1>}
            {children}
        </div>
    );
};

export default Layout;