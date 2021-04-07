import { FaGithub } from 'react-icons/fa';
import { FiX } from 'react-icons/fi';

import styles from './styles.module.scss';

export function SignInGithub() {
  const isUserLoggedIn = false;

  return isUserLoggedIn ? (
    <button 
      type="button" 
      className={styles.btnGithubLogged}
    >
      <FaGithub color="#39e1e5" />
      Nome do usuário
      <FiX color="#39e1e5" className={styles.closeIcon} />
    </button>
  ) : (
    <button 
      type="button" 
      className={styles.btnGithub}
    >
      <FaGithub color="#FFFFFF" />
      Entrar com Github
    </button>
  )
}