import ProductList from '../ProductList/ui';
import styles from './Catalog.module.css';
import { SearchBar } from '../../../../features/search-bar';
import { Btn } from '../../../../share';
import { useSearchByTitleQuery } from '../../model/catalogSlice';
import { useState, useEffect, ChangeEvent } from 'react';
import { debounce } from 'lodash';
import { ITEMS_PER_PAGE } from '../../api';
import type { Product } from '../../../../share';

const Catalog: React.FC = () => {
  const [ searchQuery, setSearchQuery ] = useState('');
  const [ debouncedSearchQuery, setDebouncedSearchQuery] = useState('');
  const debouncedSearch = debounce(query => setDebouncedSearchQuery(query), 300);
  
  const [ skip, setSkip ] = useState(0);
  const [ products, setProducts ] = useState([]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  }

  const handleShowMoreClick = () => {
    setSkip(prevVal => prevVal + ITEMS_PER_PAGE);
  }
  
  const { data, isLoading } = useSearchByTitleQuery({ title: debouncedSearchQuery, skip }, { refetchOnMountOrArgChange: true });

  useEffect(() => {
    if (data) {
      setProducts(prevProducts => {
        if (skip === 0) {
          return data.products;
        } else {
          const newProducts = data.products.filter((product: Product) => 
            !prevProducts.some((prevProduct: Product) => prevProduct.id === product.id)
          );
          return [...prevProducts, ...newProducts]
        }
      });
    }
  }, [data, skip]);

  useEffect(() => {
    debouncedSearch(searchQuery);
    return () => {
      debouncedSearch.cancel();
    };
  }, [searchQuery, debouncedSearch]);

  useEffect(() => {
    setSkip(0);
  }, [debouncedSearchQuery]);
  
  return (
    <section id='catalog' className={styles.wrapper}>


      <h2 className={styles.title}>Catalog</h2>
      <SearchBar 
        query={searchQuery}
        onChange={handleChange}
      />

      {isLoading && <p>Загрузка...</p>}

      <ProductList products={products} />

      {(!isLoading && data && data?.products.length === ITEMS_PER_PAGE) ?
        <Btn text='Show more' styleProp={styles.btn} onClick={handleShowMoreClick}/> : <></>
      }
    </section>
  );
}

export default Catalog;