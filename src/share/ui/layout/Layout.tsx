import { Outlet } from 'react-router-dom';
import { Header } from '../../../widgets/header';
import { Footer } from '../../../widgets/footer';
import styles from './layout.module.css';

const Layout: React.FC = () => {
  return (
    <div className={styles.container}>
      <Header user='Johnson Smith' />

      <main className={styles.main}>
        <Outlet /> 
      </main>

      <Footer />
    </div>
  );
};

export default Layout;
