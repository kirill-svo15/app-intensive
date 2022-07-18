import styles from "./field.module.scss"


const Field = ({children, placeholder}) => {
    return (
        <input className={styles.input} placeholder={placeholder}>
            {children}
        </input>
    );
};

export default Field;