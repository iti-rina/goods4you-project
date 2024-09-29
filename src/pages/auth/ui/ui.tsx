import { Btn } from "../../../share";
import { Title } from "../../../share/ui/title";
import styles from './ui.module.css';

const AuthPage: React.FC = () => {

  return (
    <div className={styles.pageContainer}>
      <Title title='Sign in | Goods4you' />
      <h1 className={styles.heading} >Sign in</h1>
      <form className={styles.formContainer}>
        <input placeholder='Login' className={styles.input} />
        <input type='password' placeholder='Password' className={styles.input}/>
        <Btn text='Sign in' styleProp={styles.signInBtn} />
      </form>
    </div>
  );
}

export default AuthPage;