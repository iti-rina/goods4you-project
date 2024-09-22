import { Link } from 'react-router-dom';
import { Btn, Product } from '../../share';
import styles from './productItem.module.css';

type ProductProps = {
  product: Product
}
const ProductCard: React.FC<ProductProps> = ({ product }) => {
  return (
    <Link to={`/product/${product.id}`}>
      <article className={styles.card}>
        <div className={styles.imageContainer}>
          <img src={product.thumbnail} alt={`Фотография-обложка товара ${product.title}`} className={styles.img} />
        </div>
        <div className={styles.infoWrapper}>
          <div className={styles.info}>
            <p className={styles.name}>{product.title}</p>
            <p className={styles.price}>${product.discountPercentage}</p>
          </div>
          <Btn iconName='cart' />
        </div>
      </article>
    </Link>
  );
}

export default ProductCard;