// components/Footer.js

import React from 'react';
import styles from '../styles/footer.module.css';

function Footer() {
  return (
    <footer className={`p-4 ${styles.footer}`}>
      <p className="mb-4">© 2023 Seu Site. Todos os direitos reservados.</p>
      <div className="flex">
        <a href="#" className={`text-blue-500 ${styles.link}`}>
          Termos de Serviço
        </a>
        <a href="#" className={`text-blue-500 ${styles.link}`}>
          Política de Privacidade
        </a>
      </div>
    </footer>
  );
}

export default Footer;
