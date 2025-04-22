import Link from "next/link";
import Image from "next/image";
import styles from "./header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div>
        <Link href="/">
          <Image
            src="/images/logo.png"
            alt="Plovimo Meistrai"
            width={150}
            height={150}
            priority
          />
        </Link>
      </div>

      <nav className={styles.nav}>
        <ul className={styles.ul}>
          <Link className={styles.headerLink} href="/">
            Pagrindinis
          </Link>

          <Link className={styles.headerLink} href="/services">
            Paslaugos
          </Link>

          {/* <Link className={styles.li} href="/examples">
            Darbų pavyzdžiai
          </Link> */}

          <Link className={styles.headerLink} href="/contacts">
            Kontaktai
          </Link>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
