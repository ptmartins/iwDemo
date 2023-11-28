import styles from './Skeleton.module.css';

const Skeleton = () => {
    return(
        <div className={styles.skeleton}>
            <div className={styles.thumb}></div>
            <div className={styles.body}>
                <span className={styles.title}></span>
                <span className={styles.txt}></span>
            </div>
        </div>    
    )
}

export default Skeleton;