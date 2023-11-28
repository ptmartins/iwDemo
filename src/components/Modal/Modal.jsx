import Button from '../Button/Button';
import { MdClose } from "react-icons/md";
import styles from './Modal.module.css';

const Modal = ({ title, onClose, actions }) => {
    return (
      <div className={styles.modal_overlay}>
        <div className={styles.modal}>
          <div className={styles.modal_content}>
            <div className={styles.modal_header}>
              <h2>{title}</h2>
              <MdClose className={styles.close_icon} onClick={onClose} />
            </div>
            <div className={styles.modal_body}>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis id expedita minima cum aperiam.</p>
            </div>
            <div className={styles.modal_footer}>
              <Button onClick={() => onClose()}>Close</Button>
              {actions && actions.map((action, index) => (
                <Button key={index} type="primary" onClick={() => action.onClick()}>{action.label}</Button>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Modal;