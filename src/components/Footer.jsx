import styles from "../styles/Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <p>
        {" "}
        this is purely a mock up blog with nothing special. The data for this
        very latin blog was imported from jsonplaceholder. Ive not put alot of
        time into this except maybe that dark-m0de switch up there.
      </p>
    </footer>
  );
}

export default Footer;
