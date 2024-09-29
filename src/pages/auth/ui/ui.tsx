import { Btn } from "../../../share";
import { Title } from "../../../share/ui/title";
import styles from './ui.module.css';
import { useTryAuthMutation } from "../model/authSlice";
import { useState } from "react";

const AuthPage: React.FC = () => {
  const [tryAuth, { isLoading, isSuccess, error }] = useTryAuthMutation();
  const [ inputUsername, setInputUsername ] = useState('');
  const [ inputPassword, setInputPassword ] = useState('');

  const handleChange = (event, type) => {
    if (type === 'login') {
      setInputUsername(event.target.value);
    }
    if (type === 'pass') {
      setInputPassword(event.target.value);
    }
  }

  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      const response = await tryAuth({ username: inputUsername, password: inputPassword }).unwrap();
      window.localStorage.setItem('accessToken', response.accessToken);
    } catch (err) {
      console.error('Error:', err);
    }
  };

  return (
    <div className={styles.pageContainer}>
      <Title title='Sign in | Goods4you' />
      <h1 className={styles.heading} >Sign in</h1>
      <form className={styles.formContainer}>
        <input value={inputUsername} onChange={(e) => handleChange(e, 'login')} placeholder='Login' className={styles.input} />
        <input value={inputPassword} onChange={(e) => handleChange(e, 'pass')} type='password' placeholder='Password' className={styles.input}/>
        <Btn text='Sign in' styleProp={styles.signInBtn} onClick={(e) => handleSignIn(e)} />
      </form>
    </div>
  );
}

export default AuthPage;