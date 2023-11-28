import { PiStarBold, PiStarFill, PiStarHalfFill} from "react-icons/pi";
import styles from './Star.module.css';

const Star = ({ fillPercentage, onClick }) => {
    const getStarIcon = (percentage) => {
      if (percentage >= 0.75) {
        return <PiStarFill />; 
      } else if (percentage >= 0.25) {
        return <PiStarHalfFill />; 
      }
      return <PiStarBold />; 
    };
  
    return (
      <span className={styles.star} onClick={onClick}>
        {getStarIcon(fillPercentage)}
      </span>
    );
  };
  
  export default Star;