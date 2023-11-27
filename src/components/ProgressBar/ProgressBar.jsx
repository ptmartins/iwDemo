import styles from './ProgressBar.module.css';

const ProgressBar = ({progress, label}) => {

    let cssWidth = {
        width: `${progress}%`
    }

    return(
        <div className={styles.wrapper}>
            <div className={styles.progress}>
                <div className={styles.bar} style={cssWidth}></div>
            </div>
            {label && <span className={styles.label}>{`${progress}%`}</span>}
        </div>  
    )
}

export default ProgressBar;