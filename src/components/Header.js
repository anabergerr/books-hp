import styles from '../styles/header.module.css';


function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.navigation}>
        <ul>
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>Sobre</a>
          </li>
          <li>
            <a>Contato</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
