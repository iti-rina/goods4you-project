import { LinkComponent } from "../../share/ui/link";
import styles from './header.module.css';
import { CartIcon } from "../../assets/icons";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchCart } from "../../pages/cart/model/cartSlice";
import { useLocation } from "react-router-dom";
import { useTryAuthQuery } from "../../pages/auth/model/authSlice";

const Header: React.FC = () => {
  const { pathname } = useLocation();
  const { data: authUser } = useTryAuthQuery();

  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state.cart);

  useEffect(() => {
    if (authUser) {
      dispatch(fetchCart(authUser.id));
    }
  }, [dispatch, authUser]);

  return(
    <header className={styles.header}>
      <LinkComponent text='Goods4you' url='/' isLogo={true} />
      { pathname !== '/login'
        ? (<nav aria-label='Основная навигация'>
            <ul className={styles.menuList}>
              <li><LinkComponent text='Catalog' url='/'/></li>
              <li><LinkComponent text='FAQ' url='#'/></li>
              <li className={styles.cartWrapper}>
                <LinkComponent text='Cart' url='/cart'/>
                <div className={styles.cartIcon}>
                  {CartIcon}
                  {cart ? <span className={styles.cartQnt}>{cart.totalQuantity > 100 ? '99+' : cart.totalQuantity}</span> : null}
                </div>
              </li>
              <li><LinkComponent text={`${authUser?.firstName} ${authUser?.lastName}`} url='#'/></li>
            </ul>
          </nav>)
        : <></>
      }

    </header>
  );
}

export default Header;