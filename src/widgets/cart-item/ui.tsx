import { Btn } from "../../share";
import styles from './cartItem.module.css';
import { roundUpToTwoDecimalPlaces } from '../../entities';
import { useDispatch, useSelector } from "react-redux";
import { manageCart, selectCartId, selectCartProducts } from "../../pages/cart/model/cartSlice";

type CartItemProps = {
  data: CartItem
};

export type CartItem = {
  id: number;
  title: string;
  price: number;
  quantity: number;
  total: number;
  discountPercentage: number;
  discountedTotal: number;
  thumbnail: string
}

const CartItem: React.FC<CartItemProps> = ({ data }) => {
  const cartProducts: CartItem[] = useSelector(selectCartProducts);
  const cartId = useSelector(selectCartId);
  const dispatch = useDispatch();

  const handleAddtoCart = () => {
    const productsToSend = cartProducts.map(item => {
      if (item.id === data.id) {
        return { id: item.id, quantity: item.quantity + 1}
      } else {
        return item;
      }
    });
    dispatch(manageCart({'id': cartId, 'products': productsToSend}));
  }

  const handleRemoveFromCart = () => {
    const productsToSend = cartProducts.map(item => {
      if (item.id === data.id) {
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

  const handleDeleteFromCart = () => {
    const productsToSend = cartProducts.map(item => {
      if (item.id === data.id) {
        return { id: item.id, quantity: 0}
      } else {
        return item;
      }
    });
    dispatch(manageCart({'id': cartId, 'products': productsToSend}));
  }

  const discountPrice = data.price * (1 - data.discountPercentage / 100);
  const roundedPrice = roundUpToTwoDecimalPlaces(discountPrice);

  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <img src={data.thumbnail} alt={`Фотография товара ${data.title}`} className={styles.thumbnail}/>
          <div className={styles.description}>
            <p>{data.title}</p>
            <p>${roundedPrice}</p>
          </div>
      </div>
      { data.quantity === 0
      ? <Btn iconName='cart' onClick={handleAddtoCart} styleProp={styles.cart} />
      : <div className={styles.controller}>
        <Control count={data.quantity} increment={handleAddtoCart} decrement={handleRemoveFromCart} />
        <button className={styles.deleteBtn} onClick={handleDeleteFromCart}>Delete</button>
      </div>}
    </div>
  )
}

type ControlProps = {
  count: number;
  increment?: () => void;
  decrement?: () => void;
  isDisabledPlus?: boolean
}
export const Control: React.FC<ControlProps> = ({ count, increment, decrement, isDisabledPlus=false }) => {
  return (
    <div className={styles.control}>
      <Btn iconName='minus' onClick={decrement}/>
      {count === 1 ? <span>{count} item</span> : <span>{count} items</span>}
      <Btn iconName='plus' onClick={increment} isActive={!isDisabledPlus} />
    </div>
  );
}
export default CartItem;