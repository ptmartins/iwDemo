import {Button, Checkbox, RadioBtn, ToggleSwitch} from './components';
import { FaArrowRight } from "react-icons/fa6";
import { FaCheckCircle, FaInfoCircle } from "react-icons/fa";
import { MdDangerous } from "react-icons/md";
import { IoWarning } from "react-icons/io5";
import styles from './App.module.css';

function App() {

  const showMessage = () => alert('Hello world');

  return (
    <div>
      <h1 className={styles.title}>Imagen UI Demo</h1>
      {/* Section Buttons */}
      <section className={styles.section}>
        <h2 className={styles.section_title}>Buttons</h2>
        <Button onClick={() => showMessage()}>Button</Button>
        <Button type="primary">Primary</Button>
        <Button type="danger">Danger</Button>
        <Button type="success">Success</Button>
        <Button type="warning">Warning</Button>
        <Button state="disabled">Disabled</Button>
      </section>
      {/* Section Button with icons */}
      <section className={styles.section}>
        <h2 className={styles.section_title}>Buttons with icons</h2>
        <Button>Button <FaInfoCircle /> </Button>
        <Button type="primary">Primary <FaArrowRight /> </Button>
        <Button type="danger">Danger <MdDangerous /> </Button>
        <Button type="success">Success <FaCheckCircle /> </Button>
        <Button type="warning">Warning <IoWarning /> </Button>
        <Button state="disabled">Disabled <FaInfoCircle /> </Button>
      </section>
      {/* Section Inputs */}
      <section className={styles.section}>
        <h2 className={styles.section_title}>Checkbox</h2>
        <Checkbox label="Default input checkbox" />
        <Checkbox label="Cheked input checkbox" checked={true} />
      </section>
      <section className={styles.section}>
        <h2 className={styles.section_title}>Radio Buttons</h2>
        <RadioBtn label="Radio button one" name="radioDemo" />
        <RadioBtn label="Radio button two" name="radioDemo" checked={true} />
      </section>
      <section className={styles.section}>
        <h2 className={styles.section_title}>Toggle switch</h2>
        <ToggleSwitch label="Radio button two" name="radioDemo" checked={true} />
      </section>
    </div>
  );
}

export default App;
