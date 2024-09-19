import styles from './productInfo.module.css';
import { Product } from '../../share'
import {AddToCart} from '../../features'

type ProductInfoValues = {
  product: Product;
}


const ProductInfo: React.FC<ProductInfoValues> = ({ product }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{product.name}</h1>
      <div className={styles.secondInfo}>
        <div className={styles.rating}><img src={'./src/assets/icons/rating.svg'} alt={'rating'}/></div>
        <div className={styles.categories}>
          {product.categories.map((item, i) =>
            <p className={styles.item} key={i}>
              {product.categories.length -1 === i ? item : `${item},`}
            </p>
          )}
        </div>
      </div>
      <div className={styles.stock}>In Stock - Only 5 left!</div>
      <div className={styles.description}>{product.description}</div>
      <div className={styles.thirdInfo}>
        <div className={styles.warranty}>{product.warranty}</div>
        <div className={styles.ship}>{product.ship}</div>
      </div>
      <div className={styles.addCart}>
        <div className={styles.price}>
          <div>
            <div className={styles.discountPrice}>${product.discountPrice}</div>
            <div className={styles.firstPrice}>${product.firstPrice}</div>
          </div>
          <div className={styles.discount}>Your discount: <span className={styles.bold}>14.5%</span></div>
        </div>
        <div className={styles.add}>
          <AddToCart type={'text'} id={product.id} />
        </div>
      </div>
    </div>
  );
}

export default ProductInfo;
