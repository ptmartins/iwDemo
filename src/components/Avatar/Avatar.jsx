import { FaUser } from "react-icons/fa6";
import styles from './Avatar.module.css';

const Avatar = ({txt, src, alt}) => {

    let label = null;

    if(txt) {
        if(txt.split(' ').length > 1) {
            label = txt.split(' ')[0].charAt(0).toUpperCase() + txt.split(' ')[1].charAt(0).toUpperCase();
        } else {
            label = txt;
        }
    }

    return(
        <div className={styles.avatar}> 
            {src ? <img src={src} alt={alt} className={styles.image}/> : label ? label : <FaUser  className={styles.icon}/>} 
        </div>    
    )
}

export default Avatar;