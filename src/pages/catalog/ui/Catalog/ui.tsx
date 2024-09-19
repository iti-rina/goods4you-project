import ProductList from '../ProductList/ui';
import { products } from '../../../../../data';
import styles from './Catalog.module.css';
import { SearchBar } from '../../../../features/search-bar';
import { Btn } from '../../../../share';

const Catalog: React.FC = () => {
  
  return (
    <section id='catalog' className={styles.wrapper}>
      <h2 className={styles.title}>Catalog</h2>
      <SearchBar />
      <ProductList products={products} />
      <Btn text='Show more' styleProp={styles.btn} />
    </section>
  );
}

export default Catalog;