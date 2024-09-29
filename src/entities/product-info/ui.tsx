import styles from './productInfo.module.css';
import { Btn, Product } from '../../share'
import { StarRating } from '../../share/ui/rating';
import { useSelector, useDispatch } from 'react-redux';
import { selectCartId, selectCartProducts } from '../../pages/cart/model/cartSlice';
import type { CartItem } from '../../widgets/cart-item/ui';
import { Control } from '../../widgets/cart-item/ui';
import { manageCart } from '../../pages/cart/model/cartSlice';
import { useState } from 'react';

type ProductInfoValues = {
  product: Product;
}

export function roundUpToTwoDecimalPlaces(num: number) {
  return Math.ceil(num * 100) / 100;
}

export function roundToClosestNumber(num: number) {
  const fractionalPart = num % 1;
  let result = num;
  if (fractionalPart < 0.5) {
    result = Math.floor(num);
  } else {
    result = Math.ceil(num);
  }
  return result;
}

const ProductInfo: React.FC<ProductInfoValues> = ({ product }) => {
  const discountPrice = product.price * (1 - product.discountPercentage / 100);
  const roundedPrice = roundUpToTwoDecimalPlaces(discountPrice);

  const rating = roundToClosestNumber(product.rating);

  const cartProducts: CartItem[] = useSelector(selectCartProducts);
  const cartId = useSelector(selectCartId);
  const findInCart = cartProducts.find(el => el.id == product.id);

  const dispatch = useDispatch();

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
          return { id: item.id, quantity: item.quantity - 1}
        }
      } else {
        return item;
      }
    });
    dispatch(manageCart({'id': cartId, 'products': productsToSend}));
  }

  const [disabled, setDisabled] = useState(false);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{product.title}</h1>
      <div className={styles.secondInfo}>
        <div className={styles.rating}><StarRating rating={rating}/></div>
        <div className={styles.categories}>
          {product.tags.map((item, i) =>
            <p className={styles.item} key={i}>
              {product.tags.length -1 === i ? item : `${item},`}
            </p>
          )}
        </div>
      </div>
      <div className={styles.stock}>In Stock - Only {product.stock} left!</div>
      <div className={styles.description}>{product.description}</div>
      <div className={styles.thirdInfo}>
        <div className={styles.warranty}>{product.warrantyInformation}</div>
        <div className={styles.ship}>{product.shippingInformation}</div>
      </div>
      <div className={styles.addCart}>
        <div className={styles.price}>
          <div>
            <div className={styles.discountPrice}>${roundedPrice}</div>
            <div className={styles.firstPrice}>${product.price}</div>
          </div>
          <div className={styles.discount}>Your discount: <span className={styles.bold}>{product.discountPercentage}%</span></div>
        </div>
        <div className={styles.add}>
          { 
            findInCart 
            ? <Control count={findInCart.quantity} increment={handleAddtoCart} decrement={handleRemoveFromCart} isDisabledPlus={disabled} /> 
            : <Btn iconName='cart' onClick={handleAddtoCart} />
          }
        </div>
      </div>
    </div>
  );
}

export default ProductInfo;
