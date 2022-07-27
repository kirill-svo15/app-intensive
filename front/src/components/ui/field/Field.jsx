import styles from "./field.module.scss"

const Field = ({children, placeholder ,value,onChange}) => {

    return (
        <input value={value} onChange={onChange} className={styles.input} placeholder={placeholder} >
            {children}
        </input>
    );
};

export default Field;