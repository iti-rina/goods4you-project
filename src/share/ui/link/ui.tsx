import styles from './link.module.css';

type LinkPropsType = {
  text: string;
  url: string;
  isLogo?: boolean
}

const LinkComponent: React.FC<LinkPropsType> = ({ text, url, isLogo=false }) => {
  return (
    <a href={url} className={isLogo ? styles.logo : styles.link} >
      {text}
    </a>
  )
}

export default LinkComponent;