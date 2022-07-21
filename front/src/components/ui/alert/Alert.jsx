import styles from "./alert.module.scss"

import cn from "classnames";

const Alert = ({type, children}) => {
    return (
        <div className={cn(styles.alert, {
            [styles.error]: type === 'error',
            [styles.success]: type === 'success',
        })}>
            {children}
        </div>
    );
};

export default Alert;