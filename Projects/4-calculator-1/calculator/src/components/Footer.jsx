import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p className={styles.footerText}>
        © 2025 Calculator. Created by <strong>Amit Rajput</strong>
      </p>
    </footer>
  );
};

export default Footer;

