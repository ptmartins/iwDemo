import styles from './IWLoading.module.css';

const iwLoading = () => {
    return(
        <div className={styles.loading}>
            <div className={styles.bar}></div> 
        </div>
    )
}

export default iwLoading;