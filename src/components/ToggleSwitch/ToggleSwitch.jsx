import {v4 as uuidv4} from 'uuid';
import { FaCheck } from "react-icons/fa";
import styles from './ToggleSwitch.module.css';

const ToggleSwitch = () => {

    const id = uuidv4();

    return(
        <label className={styles.switch} htmlFor={id}>
            <input id={id} type="checkbox" className={styles.input} />
            <span className={styles.slider}>
                <FaCheck className={styles.icon}/>
            </span>
        </label>
    ) 
}

export default ToggleSwitch;