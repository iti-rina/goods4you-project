import { Link } from 'react-router-dom';
import { Btn, Product } from '../../share';
import styles from './productItem.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectCartId, selectCartProducts } from '../../pages/cart/model/cartSlice';
import { Control } from '../cart-item';
import type { CartItem } from '../cart-item/ui';
import { manageCart } from '../../pages/cart/model/cartSlice';
import { useState } from 'react';

type ProductProps = {
  product: Product
}
const ProductCard: React.FC<ProductProps> = ({ product }) => {
  const cartProducts: CartItem[] = useSelector(selectCartProducts);
  const cartId = useSelector(selectCartId);

  const findInCart = cartProducts.find(el => el.id == product.id);

  const dispatch = useDispatch();
  const [disabled, setDisabled] = useState(false);


  const handleAddtoCart = () => {
    let productsToSend = [];
    if (findInCart) {
      productsToSend = cartProducts.map(item => {
        if (item.id === product.id) {
          if (item.quantity < product.stock) {
            return { id: item.id, quantity: item.quantity + 1}
          } else {
            setDisabled(true);
          }
        } else {
          return item;
        }
      })
    } else {
      productsToSend = [...cartProducts, { id: product.id, quantity: 1}]
    }
    dispatch(manageCart({'id': cartId, 'products': productsToSend}));
  }

  const handleRemoveFromCart = () => {
    const productsToSend = cartProducts.map(item => {
      if (item.id === product.id) {
        if (item.quantity === 0 ) {
          return { id: item.id, quantity: item.quantity}
        } else {
          if (disabled) {
            setDisabled(false);
          }
          return { id: item.id, quantity: item.quantity - 1}
        }
      } else {
        return item;
      }
    });
    dispatch(manageCart({'id': cartId, 'products': productsToSend}));
  }
  
  return (
      <article className={styles.card}>
        <Link to={`/product/${product.id}`}>
          <div className={styles.imageContainer}>
            <img src={product.thumbnail} alt={`Фотография-обложка товара ${product.title}`} className={styles.img} />
          </div>
        </Link>
        <div className={styles.infoWrapper}>
          <div className={`${styles.info} ${findInCart ? styles.cuttedInfo : ''}`}>
            <p className={styles.name}>{product.title}</p>
            <p className={styles.price}>${product.discountPercentage}</p>
          </div>
          { 
            findInCart 
            ? <Control count={findInCart.quantity} increment={handleAddtoCart} decrement={handleRemoveFromCart} isDisabledPlus={disabled} /> : <Btn iconName='cart' onClick={handleAddtoCart}/>
          }
        </div>
      </article>
  );
}

export default ProductCard;