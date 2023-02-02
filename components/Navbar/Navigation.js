import styles from '../../styles/Navbar.module.css'
import Element from "./Element";
export default function Navigation(props) {
  const elements = [
    {
      label: "Login/Signup",
      href: "/",
    },
    {
      label: "Trade",
      href: "/experience/content",
    },
    // {
    //   label: "/projects",
    //   href: "/projects/content",
    // },
    {
      label: "Portfolio",
      href: "/tech/content",
    },
    {
      label: "History",
      href:"/contact/content"
    },
  ];

  return (
    <div className={styles.container}>
      {elements.map((el, ind) => (
        <Element key={ind} {...el}/>
      ))}
    </div>
  );
}