import { Title } from '../../share/ui/title';
import { Catalog } from './ui/Catalog';
import { FAQ } from './ui/FAQ';
import { Hero } from './ui/Hero';
import styles from './CatalogPage.module.css';
import { useTryAuthQuery } from '../auth/model/authSlice';
import { Navigate } from 'react-router-dom';
import { Loader } from '../../share/ui/loader';

const CatalogPage: React.FC = () => {
  const { data, isLoading, error } = useTryAuthQuery();

  if (error) {
    if (error.status === 401) {
      return <Navigate to='/login' />
    }
    return <p>Error occured: {error.status} </p>
  }

  if (isLoading) {
    return <Loader />
  }

  return (
    <div className={styles.wrapper}>
      <Title title='Catalog | Goods4you'/>
      <Hero />
      <Catalog />
      <FAQ />
    </div>
  );
}

export default CatalogPage;