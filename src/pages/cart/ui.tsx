import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCart } from './model/cartSlice';
import { Title } from '../../share/ui/title';
import { CartItem } from '../../widgets/cart-item';
import styles from './cartPage.module.css';
import { useTryAuthQuery } from '../auth/model/authSlice';

const CartPage: React.FC = () => {
  const dispatch = useDispatch();
  const { cart, loading, error } = useSelector((state) => state.cart);
  const { data } = useTryAuthQuery();


  useEffect(() => {
    if (data) {
      dispatch(fetchCart(data.id));
    }
  }, [dispatch, data]);

  if (loading) return <p>Загрузка...</p>;
  if (error) return <p>Ошибка: {error}</p>;

  
  if (cart) {
    return (
      <div className={styles.wrapper}>
        <Title title='My cart | Goods4you'/>
        <h1 className={styles.title}>My cart</h1>

        <div className={styles.cartInfoContainer}>
          <div className={styles.productsContainer}>
            { cart.products.map(item => <CartItem data={item} key={item.id} />)}
          </div>
          <div className={styles.checkoutContainer}>
              <div className={styles.totalCountContainer}>
                <p className={styles.totalCountText}>Total count</p>
                {cart.totalProducts === 1 
                ? <p className={styles.totalCountNum}>{cart.totalProducts} item</p>
                : <p className={styles.totalCountNum}>{cart.totalProducts} items</p>
                }
              </div>

              <div className={styles.notDiscountPriceContainer}>
                <p className={styles.notDiscountPriceText}>Price without discount</p>
                <p className={styles.notDiscountPriceNum}>${cart.total}</p>
              </div>
            

            <div className={styles.totalPriceContainer}>
              <p className={styles.totalPriceText}>Total price</p>
              <p className={styles.totalPriceNum}>${cart.discountedTotal}</p>
            </div>
            
          </div>
        </div>

      </div>
    );
  }
  
}

export default CartPage;
