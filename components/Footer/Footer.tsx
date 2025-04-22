import Link from "next/link";
import Image from "next/image";
import styles from "./footer.module.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.logoSection}>
          <Link href="/">
            <Image
              src="/images/logopng.png"
              alt="Plovimo Meistrai"
              width={80}
              height={80}
              priority
            />
          </Link>
          <span className={styles.copyright}>
            © {currentYear} Plovimo Meistrai
          </span>
        </div>
        <nav className={styles.footerNav}>
          <Link className={styles.footerLink} href="/">
            Pagrindinis
          </Link>
          <Link className={styles.footerLink} href="/services">
            Paslaugos
          </Link>
          <Link className={styles.footerLink} href="/contacts">
            Kontaktai
          </Link>
        </nav>
        <div className={styles.contactInfo}>
          <a href="tel:+37067797443" className={styles.contactLink}>
            +370 677 97443
          </a>
          <a
            href="mailto:plovimomeistrai@gmail.com"
            className={styles.contactLink}
          >
            plovimomeistrai@gmail.com
          </a>
          <span className={styles.address}>Vilnius, Lietuva</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
