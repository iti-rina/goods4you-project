import { Btn, Product } from '../../share';
import styles from './productItem.module.css';

type ProductProps = {
  product: Product
}
const ProductCard: React.FC<ProductProps> = ({ product }) => {
  return (
    <article className={styles.card}>
      <img src={product.thumbnail} alt={`Фотография-обложка товара ${product.title}`} className={styles.img} />
      <div className={styles.infoWrapper}>
        <div className={styles.info}>
          <p className={styles.name}>{product.title}</p>
          <p className={styles.price}>${product.discountPercentage}</p>
        </div>
        <Btn iconName='cart' />
      </div>
    </article>
  );
}

export default ProductCard;