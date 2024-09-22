import { useState } from "react"
import { Btn } from "../../share";
import styles from './cartItem.module.css';
import { roundUpToTwoDecimalPlaces } from "../../entities/product-info/ui";

type CartItemProps = {
  data: CartItem
};

type CartItem = {
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
  const [currentCount, setCurrentCount] = useState(data.quantity);
  const handleIncrement = () => {
    setCurrentCount(prevCount => prevCount + 1);
  }

  const handleDecrement = () => {
    if (currentCount !== 1) {
      setCurrentCount(prevCount => prevCount - 1);
    }
  }

  const discountPrice = data.price * (1 - data.discountPercentage / 100);
  const roundedPrice = roundUpToTwoDecimalPlaces(discountPrice);

  return (
    <div className={styles.container}>
      <img src={data.thumbnail} alt={`Фотография товара ${data.title}`} className={styles.thumbnail}/>
      <div className={styles.description}>
        <p>{data.title}</p>
        <p>${roundedPrice}</p>
      </div>
      <Control count={data.quantity} increment={handleIncrement} decrement={handleDecrement} />
      <button className={styles.deleteBtn}>Delete</button>
    </div>
  )
}

type ControlProps = {
  count: number;
  increment: () => void;
  decrement: () => void;
}
const Control: React.FC<ControlProps> = ({ count, increment, decrement }) => {
  return (
    <div className={styles.control}>
      <Btn iconName='minus' onClick={decrement}/>
      {count === 1 ? <span>{count} item</span> : <span>{count} items</span>}
      <Btn iconName='plus' onClick={increment}/>
    </div>
  );
}
export default CartItem;