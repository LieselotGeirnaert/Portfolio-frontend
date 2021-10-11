import styles from "./Contact.module.css";
import Link from "next/link";


const Contact = () => {
  return (
    <div className={styles.contact}>
      <h2 id="contact" className="pagetitle">
        Contact
      </h2>
      <div className={styles.text}>
        <p>
          If you want to know more or have any questions, feel free to contact
          me! I'd be glad to listen!
        </p>
        <Link href="mailto:lieselot.geirnaert@gmail.com">
          <a className={styles.link}>
            lieselot.geirnaert@gmail.com
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Contact;
