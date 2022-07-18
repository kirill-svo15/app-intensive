import styles from "./layout.module.scss"

const LayoutOther = ({children}) => {
    return (
        <div className={styles.otherWrapper}>
            {children}
        </div>
    );
};

export default LayoutOther;