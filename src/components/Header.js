import styles from '../styles/header.module.css';


function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.navigation}>
        <ul>
          <li>
            <a>Sobre</a>
          </li>
          <li>
            <a>Docs</a>
          </li>
          <li>
            <a>Status</a>
          </li>
          <li>
            <a>Books</a>
          </li>
          <li>
            <a>Characters</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
