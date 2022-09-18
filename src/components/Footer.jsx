import { useSelector } from "react-redux";

const Footer = () => {
  const footerTxt = useSelector((state) => state.settings.footerTxt);

  return (
    <footer>
      <h3>
        footer txt :<span>{footerTxt}</span>
      </h3>
    </footer>
  );
};

export default Footer;
