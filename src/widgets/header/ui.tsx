import { LinkComponent } from "../../share/ui/link";
import styles from './header.module.css';
import { CartIcon } from "../../assets/icons";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchCart } from "../../pages/cart/model/cartSlice";

type HeaderPropsType = {
  user: string
}

const Header: React.FC<HeaderPropsType> = ({ user }) => {
  const dispatch = useDispatch();
  const { cart, loading, error } = useSelector((state) => state.cart);

  useEffect(() => {
    dispatch(fetchCart());
  }, [dispatch]);

  return(
    <header className={styles.header}>
      <LinkComponent text='Goods4you' url='#' isLogo={true} />
      <nav aria-label='Основная навигация'>
        <ul className={styles.menuList}>
          <li><LinkComponent text='Catalog' url='#catalog'/></li>
          <li><LinkComponent text='FAQ' url='#'/></li>
          <li className={styles.cartWrapper}>
            <LinkComponent text='Cart' url='/cart'/>
            <div className={styles.cartIcon}>
              {CartIcon}
              {cart ? <span className={styles.cartQnt}>{cart.totalQuantity > 100 ? '99+' : cart.totalQuantity}</span> : null}
            </div>
          </li>
          <li><LinkComponent text={user} url='#'/></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;