import { Outlet, useLocation } from 'react-router-dom';
import { Header } from '../../../widgets/header';
import { Footer } from '../../../widgets/footer';
import styles from './layout.module.css';

const Layout: React.FC = () => {
  const { pathname } = useLocation();
  return (
    <div className={styles.container}>
      <Header user='Johnson Smith' />

      <main className={styles.main}>
        <Outlet /> 
      </main>

      { pathname !== '/login' ? <Footer /> : <></>}
    </div>
  );
};

export default Layout;
