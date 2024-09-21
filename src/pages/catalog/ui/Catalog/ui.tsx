import ProductList from '../ProductList/ui';
import styles from './Catalog.module.css';
import { SearchBar } from '../../../../features/search-bar';
import { Btn } from '../../../../share';
import { useSearchByTitleQuery } from '../../model/catalogSlice';
import { useState, useEffect, ChangeEvent } from 'react';
import { debounce } from 'lodash';
import { ITEMS_PER_PAGE } from '../../api';

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
  
  const { data, error, isLoading } = useSearchByTitleQuery({ title: debouncedSearchQuery, skip }, { refetchOnMountOrArgChange: true });

  useEffect(() => {
    if (data) {
      setProducts(prevProducts => {
        if (skip === 0) {
          return data.products;
        } else {
          return [...prevProducts, ...data.products]
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
      {error && <p>Ошибка: {error}</p>}

      <ProductList products={products} />

      {(!isLoading && data && data?.products.length === ITEMS_PER_PAGE) ?
        <Btn text='Show more' styleProp={styles.btn} onClick={handleShowMoreClick}/> : <></>
      }
    </section>
  );
}

export default Catalog;