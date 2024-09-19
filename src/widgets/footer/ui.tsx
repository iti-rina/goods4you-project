import { LinkComponent } from "../../share/ui/link";
import styles from './footer.module.css';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <LinkComponent text='Goods4you' url='#' isLogo={true} />
      <nav aria-label='Навигация в футере'>
        <ul className={styles.menuList}>
          <li><LinkComponent text='Catalog' url='#'/></li>
          <li><LinkComponent text='FAQ' url='#'/></li>
        </ul>
      </nav>
    </footer>
  );
}

export default Footer;