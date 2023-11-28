import {FaChevronRight} from 'react-icons/fa';
import styles from './Breadcrumbs.module.css';

const Breadcrumbs = ({items, icon}) => {
    return(
        <div className={styles.breadcrumbs}>
            {items ? items.map(item => {
                return(<><span> {item} </span> <i>{icon ? icon : <FaChevronRight/>}</i></>)
            }) : ''}
        </div>    
    )
}

export default Breadcrumbs;