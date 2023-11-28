import {useState, useEffect} from 'react';
import {Button, Checkbox, RadioBtn, ToggleSwitch, SocialCheckboxes, Accordion, Alert, Avatar, ProgressBar, IWLoading, Breadcrumbs, StarRating, Modal, Skeleton} from './components';
import { FaArrowRight } from "react-icons/fa6";
import { FaCheckCircle, FaInfoCircle } from "react-icons/fa";
import { IoMdAlert } from "react-icons/io";
import { IoWarning } from "react-icons/io5";
import {FiChevronsRight} from 'react-icons/fi';
import styles from './App.module.css';

function App() {

  const showMessage = () => alert('Hello world');
  const accordionItems = [
    { title: 'Item 1', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' },
    { title: 'Item 2', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' },
    { title: 'Item 3', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' },
  ];
  const breadcrumbItems = ['Home', 'About', 'Team'];
  
  let [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      if(progress <= 100) {
        setProgress(progress++);
      }
    }, 800)

    return () => clearInterval(timer);

  }, []);

  const [starRating, setStarRating] = useState(3.7);
  const handleStarRating = (newRating) => {
    setStarRating(newRating);
  };

  const [showModal, setShowModal] = useState(false);
  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleAction = () => {
    alert('Modal action clicked!');
  };

  const modalActions = [
    {
      label: 'Action', 
      onClick: handleAction 
    },
  ];

  return (
    <div>
      <h1 className={styles.title}>
        Imagen UI Demo 
        <span>
          <ToggleSwitch />  
        </span> 
      </h1>


      {/* Buttons */}
      <section className={styles.section}>
        <h2 className={styles.section_title}>Buttons</h2>
        <Button onClick={() => showMessage()}>Button</Button>
        <Button type="primary">Primary</Button>
        <Button type="danger">Danger</Button>
        <Button type="success">Success</Button>
        <Button type="warning">Warning</Button>
        <Button state="disabled">Disabled</Button>
      </section>


      {/* Buttons with icons */}
      <section className={styles.section}>
        <h2 className={styles.section_title}>Buttons with icons</h2>
        <Button>Button <FaInfoCircle /> </Button>
        <Button type="primary">Primary <FaArrowRight /> </Button>
        <Button type="danger">Danger <IoMdAlert /> </Button>
        <Button type="success">Success <FaCheckCircle /> </Button>
        <Button type="warning">Warning <IoWarning /> </Button>
        <Button state="disabled">Disabled <FaInfoCircle /> </Button>
      </section>


      {/* Checkboxes */}
      <section className={styles.section}>
        <h2 className={styles.section_title}>Checkbox</h2>
        <Checkbox label="Default input checkbox" />
        <Checkbox label="Cheked input checkbox" checked={true} />
      </section>

      {/* Radio Buttons */}
      <section className={styles.section}>
        <h2 className={styles.section_title}>Radio Buttons</h2>
        <RadioBtn label="Radio button one" name="radioDemo" />
        <RadioBtn label="Radio button two" name="radioDemo" checked={true} />
      </section>

      {/* Toggle Switch */}
      <section className={styles.section}>
        <h2 className={styles.section_title}>Toggle switch</h2>
        <ToggleSwitch />
      </section>

      {/* Social checkboxes */}
      <section className={styles.section}>
        <h2 className={styles.section_title}>Social checkboxes</h2>
        <SocialCheckboxes items={['Instagram', 'Dribbble', 'Spotify', 'Slack', 'Discord', 'Framer', 'Sketch', 'Figma']} />
      </section>

      {/* Accordions */}
      <section className={styles.section}>
        <h2 className={styles.section_title}>Accordion</h2>
        <Accordion items={accordionItems} />
      </section>

      {/* Alerts */}
      <section className={styles.section}>
        <h2 className={styles.section_title}>Alerts</h2>
        <Alert type="error" message="This is an error alert!" />
        <br />
        <Alert type="warning" message="This is a warning alert!" />
        <br />
        <Alert type="info" message="This is an info alert!" />
        <br />
        <Alert type="success" message="This is a success alert!" />
      </section>

      {/* Avatars */}
      <section className={styles.section}>
        <h2 className={styles.section_title}>Avatars</h2>
        <div className={styles.item}>
          <Avatar />
          <span>Icon Avatar</span>
        </div>
        <div className={styles.item}>
          <Avatar txt="PM"/>
          <span>Initials Avatar</span>
        </div>
        <div className={styles.item}>
          <Avatar txt="Joao Silva" />
          <span>String Avatar</span>
        </div>
        <div className={styles.item}>
          <Avatar src="https://xsgames.co/randomusers/avatar.php?g=male" alt="Lorem ipsum" />
          <span>Thumbnail Avatar</span>
        </div>
      </section>

      {/* Progress Bar */}
      <section className={styles.section}>
        <h2 className={styles.section_title}>Progress Bar</h2>
        <div className={styles.item}>
          <ProgressBar progress={progress} />
          <span>Simple progress bar</span>
        </div>
        <div className={styles.item}>
          <ProgressBar progress={progress} label="true"/>
          <span>Simple progress bar with label</span>
        </div>
      </section>

      {/* iwLoading */}
      <section className={styles.section}>
        <h2 className={styles.section_title}>iwLoading</h2>
        <div className={styles.item}>
          <IWLoading />
          <span>Default iwLoading animation</span>
        </div>
        <div className={styles.item}>
          <IWLoading color="#335ed7"/>
          <span>Colored iwLoading animation</span>
        </div>
      </section>

      {/* Breadcrumbs */}
      <section className={styles.section}>
        <h2 className={styles.section_title}>Breadcrumbs</h2>
        <div className={styles.item}>
          <Breadcrumbs items={breadcrumbItems}/>
          <span>Default breadcrumbs</span>
        </div>
        <div className={styles.item}>
          <Breadcrumbs items={breadcrumbItems} icon={<FiChevronsRight />}/>
          <span>Breadcrumbs with custom icon</span>
        </div>
      </section>
      <section className={styles.section}>
        <h2 className={styles.section_title}>Star Rating</h2>
        <StarRating rating={starRating} onRatingChange={handleStarRating} /> 
      </section>
      <section className={styles.section}>
        <h2 className={styles.section_title}>Modal</h2>
        <Button onClick={() => openModal()}>Open Modal</Button>
        {showModal && <Modal          
                          title="Modal Component"
                          onClose={closeModal}
                          actions={modalActions}/>
        }
      </section>
      <section className={styles.section}>
        <h2 className={styles.section_title}>Loading Skeleton</h2>
        <Skeleton />
      </section>
    </div>
  );
}

export default App;
 