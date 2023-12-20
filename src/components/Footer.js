import styles from '../styles/footer.module.css';


function Footer() {
  return (
    <footer className={styles.footer}>
      <p>© 2023 Seu Site. Todos os direitos reservados.</p>
      <div>
        <a href="#" className={styles.link}>
          Termos de Serviço
        </a>
        <a href="#" className={styles.link}>
          Política de Privacidade
        </a>
      </div>
    </footer>
  );
}

export default Footer;
