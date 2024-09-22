import { LinkComponent } from "../../share/ui/link";
import styles from './header.module.css';
import { CartIcon } from "../../assets/icons";

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
          <li className={styles.cartWrapper}>
            <LinkComponent text='Cart' url='/cart'/>
            <div className={styles.cartIcon}>{CartIcon}</div>
          </li>
          <li><LinkComponent text={user} url='#'/></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;