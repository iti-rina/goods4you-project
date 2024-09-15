import { Link } from 'react-router-dom';
import styles from './link.module.css';

type LinkPropsType = {
  text: string;
  url: string;
  isLogo?: boolean
}

const LinkComponent: React.FC<LinkPropsType> = ({ text, url, isLogo=false }) => {
  return (
    <Link to={url} className={`${styles.a} ${isLogo ? styles.logo : styles.link}`}>
      {text}
    </Link>
  )
}

export default LinkComponent;