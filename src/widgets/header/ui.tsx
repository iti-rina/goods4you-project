import { LinkComponent } from "../../share/ui/link";
import styles from './header.module.css';

type HeaderPropsType = {
  user: string
}

const Header: React.FC<HeaderPropsType> = ({ user }) => {
  return(
    <header className={styles.header}>
      <LinkComponent text='Goods4you' url='#' isLogo={true} />
      <nav aria-label='Основная навигация'>
        <ul className={styles.menuList}>
          <li><LinkComponent text='Catalog' url='#catalog'/></li>
          <li><LinkComponent text='FAQ' url='#'/></li>
          <li><LinkComponent text='Cart' url='/cart'/></li>
          <li><LinkComponent text={user} url='#'/></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;