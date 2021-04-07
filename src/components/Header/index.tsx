import { SignInGithub } from '../SignInGithub';

import styles from './styles.module.scss';

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.header_container}>
        <img src="/images/logo.svg" alt="Logotipo DevNews"/>
        <nav>
          <a className={styles.active} href="#">Inicio</a>
          <a href="#">Notícias</a>
        </nav>
        <SignInGithub />
      </div>
    </header>
  );
}