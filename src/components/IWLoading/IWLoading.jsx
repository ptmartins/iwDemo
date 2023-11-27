import styles from './IWLoading.module.css';

const iwLoading = ({color}) => {

    let css = color ? {backgroundColor: `${color}`} : null;

    return(
        <div className={styles.loading}>
            <div className={styles.bar} style={css}></div> 
        </div>
    )
}

export default iwLoading;