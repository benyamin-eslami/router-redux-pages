import { useSelector } from "react-redux";
import styles from "./Footer.module.css";

const Footer = () => {
  const footerTxt = useSelector((state) => state.settings.footerTxt);

  return (
    <footer className={styles.footer}>
      <h3>
        footer txt :<span>{footerTxt}</span>
      </h3>
    </footer>
  );
};

export default Footer;
