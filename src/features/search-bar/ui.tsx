import styles from './SearchBar.module.css'

const SearchBar: React.FC = () => {
  return (
    <input type='text' placeholder='Search by title' className={styles.input} />
  );
}

export default SearchBar;