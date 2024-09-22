import styles from './productInfo.module.css';
import { Product } from '../../share'
import {AddToCart} from '../../features'
import { StarRating } from '../../share/ui/rating';

type ProductInfoValues = {
  product: Product;
}

export function roundUpToTwoDecimalPlaces(num: number) {
  return Math.ceil(num * 100) / 100;
}

function roundToClosestNumber(num: number) {
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
          <AddToCart type={'text'} id={product.id} />
        </div>
      </div>
    </div>
  );
}

export default ProductInfo;
