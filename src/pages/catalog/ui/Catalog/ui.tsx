import ProductList from '../ProductList/ui';
import { products } from '../../../../../data';
import styles from './Catalog.module.css';
import { SearchBar } from '../../../../features/search-bar';
import { Btn } from '../../../../share';
import { useSearchByTitleQuery } from '../../model/catalogSlice';
import { useState, useEffect, ChangeEvent } from 'react';
import { debounce } from 'lodash';

const Catalog: React.FC = () => {
  const [ searchQuery, setSearchQuery ] = useState('');
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  }

  const [ debouncedSearchQuery, setDebouncedSearchQuery] = useState('');
  const debouncedSearch = debounce(query => setDebouncedSearchQuery(query), 300);

  const { data, error, isLoading } = useSearchByTitleQuery(debouncedSearchQuery);
  console.log(data);

  useEffect(() => {
    debouncedSearch(searchQuery);
    return () => {
      debouncedSearch.cancel();
    };
  }, [searchQuery, debouncedSearch]);
  
  return (
    <section id='catalog' className={styles.wrapper}>
      <h2 className={styles.title}>Catalog</h2>
      <SearchBar 
        query={searchQuery}
        onChange={handleChange}
      />
      <ProductList products={data.products} />
      <Btn text='Show more' styleProp={styles.btn} />
    </section>
  );
}

export default Catalog;