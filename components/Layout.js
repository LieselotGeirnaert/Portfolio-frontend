import styles from "./Layout.module.css";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

const Layout = ({ children, active }) => {
  const fetchExperiences = async () => {
    const req = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_URL}/games/?gamecode=${code}`
    );
    const res = await req.json();
    return res[0].id;
  };
  
  return (
    <div className={styles.body}>
      <Head>
        <title>Lieselot Geirnaert - Digital Creative</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={styles.header}>
        <h1 className="hidden">Lieselot Geirnaert - Digital Creative</h1>
        <nav className={styles.nav}>
          <Link href="#about">
            <a
              className={
                active === "about" ? styles.nav__activelink : styles.nav__link
              }
            >
              About
            </a>
          </Link>
          <Link href="#projects">
            <a
              className={
                active === "projects"
                  ? styles.nav__activelink
                  : styles.nav__link
              }
            >
              Projects
            </a>
          </Link>
          <Link href="#contact">
            <a
              className={
                active === "contact" ? styles.nav__activelink : styles.nav__link
              }
            >
              Contact
            </a>
          </Link>
        </nav>
      </header>
      <div className={styles.socials}>
        <Link href="https://www.linkedin.com/in/lieselotgeirnaert/">
          <a className={styles.socials__link}>
            <Image
              src={`/assets/img/linkedin.svg`}
              alt="Linkedin"
              width={25}
              height={25}
            />
            <span className="hidden">Linkedin</span>
          </a>
        </Link>
        <Link href="https://github.com/LieselotGeirnaert">
          <a className={styles.socials__link}>
            <Image
              src={`/assets/img/github.svg`}
              alt="Github"
              width={25}
              height={25}
            />
            <span className="hidden">Github</span>
          </a>
        </Link>
        <Link href="https://www.behance.net/lieselotgeirnaert">
          <a className={styles.socials__link}>
            <Image
              src={`/assets/img/behance.svg`}
              alt="Behance"
              width={25}
              height={25}
            />
            <span className="hidden">Behance</span>
          </a>
        </Link>
        <Link href="https://www.instagram.com/geirnaertlieselot/">
          <a className={styles.socials__link}>
            <Image
              src={`/assets/img/instagram.svg`}
              alt="Instagram"
              width={25}
              height={25}
            />
            <span className="hidden">Instagram</span>
          </a>
        </Link>
      </div>

      <div className={styles.email}>
        <Link href="mailto:lieselot.geirnaert@gmail.com">
          <a>
            lieselot.geirnaert@gmail.com
            <span className="hidden">Instagram</span>
          </a>
        </Link>
      </div>

      <main className={styles.main}>{children}</main>
      <footer className={styles.footer}>
        <p className={styles.footer__text}>Lieselot Geirnaert - 2021</p>
      </footer>
    </div>
  );
};

export default Layout;