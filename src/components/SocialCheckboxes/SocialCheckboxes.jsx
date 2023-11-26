import {v4 as uuidv4} from 'uuid';
import { RiDiscordLine, RiSpotifyLine } from "react-icons/ri";
import { LuFramer } from "react-icons/lu";
import { PiSketchLogo, PiSlackLogo } from "react-icons/pi";
import { FaInstagram, FaDribbble, FaFigma, FaCheckCircle } from "react-icons/fa";
import styles from './SocialChexboxes.module.css';

const SocialChexboxes = ({items}) => {

    return(
        <div className={styles.group}>
            {items.map(item => {

                const id = uuidv4();
                let logo = null;

                switch(item.toLowerCase()) {
                    case 'discord':
                        logo = <RiDiscordLine className={styles.logo} />;
                        break;
                    case 'framer':
                        logo = <LuFramer className={styles.logo} />;
                        break;
                    case 'sketch':
                        logo = <PiSketchLogo className={styles.logo} />;
                        break;
                    case 'instagram':
                        logo = <FaInstagram className={styles.logo} />;
                        break;
                    case 'dribbble':
                        logo = <FaDribbble className={styles.logo} />;
                        break;
                    case 'spotify':
                        logo = <RiSpotifyLine className={styles.logo} />;
                        break;
                    case 'figma':
                        logo = <FaFigma className={styles.logo} />;
                        break;
                    case 'slack':
                        logo = <PiSlackLogo className={styles.logo} />;
                        break;
                    default: 
                        break;
                }

                return(
                    <div className={styles.checkbox}>
                        <label htmlFor={id} className={styles.label}>
                            <input id={id} type="checkbox" className={styles.input} />
                            <FaCheckCircle className={styles.checkmark} />
                            <div className={styles.tile}>
                                {logo}
                                <span className={styles.txt}>{item}</span>
                            </div>
                        </label>
                    </div>
                )
            })}
        </div>
    )
}

export default SocialChexboxes;