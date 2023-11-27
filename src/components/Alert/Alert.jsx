import { IoMdAlert } from "react-icons/io";
import { IoWarning } from "react-icons/io5";
import { FaCheckCircle, FaInfoCircle } from "react-icons/fa";
import styles from './Alert.module.css';

const Alert = ({type, message}) => {

    let icon = null;
    let typeClass = null;

    switch(type) {
        case 'error':
            icon = <IoMdAlert />;
            typeClass = styles.error;
            break;
        case 'warning':
            icon = <IoWarning />;
            typeClass = styles.warning;
            break;
        case 'info':
            icon = <FaInfoCircle />;
            typeClass = styles.info;
            break;
        case 'success':
            icon = <FaCheckCircle />;
            typeClass = styles.success;
            break;
        default:
            break;
    }

    return(
        <div className={`${styles.alert} ${typeClass}`}>
            <span className="icon"> {icon} </span>
            <div className="txt"> {message} </div>
        </div>    
    )
}

export default Alert;