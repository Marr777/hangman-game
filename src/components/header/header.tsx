import styles from './header.style.module.scss';

export default function Header() {
  return (
    <header className={styles.header}>
      <img className={styles.headerImage} src="img/logo.svg"></img>
    </header>
  );
}

