import { ChangeEvent } from 'react';
import styles from './SearchBar.module.css'

type SearchBarProps = {
  query: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

const SearchBar: React.FC<SearchBarProps> = ({ query, onChange }) => {
  return (
    <input 
      value={query}
      onChange={onChange}
      type='text' 
      placeholder='Search by title' 
      className={styles.input} 
    />
  );
}

export default SearchBar;