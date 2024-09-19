import { Title } from '../../share/ui/title';
import { Catalog } from './ui/Catalog';
import { FAQ } from './ui/FAQ';
import { Hero } from './ui/Hero';
import styles from './CatalogPage.module.css';

const CatalogPage: React.FC = () => {
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