import { Btn, Product } from '../../share';
import styles from './productItem.module.css';

type ProductProps = {
  product: Product
}
const ProductCard: React.FC<ProductProps> = ({ product }) => {
  return (
    <article className={styles.card}>
      <img src={product.coverImage} alt={`Фотография-обложка товара ${product.name}`} className={styles.img} />
      <div className={styles.infoWrapper}>
        <div className={styles.info}>
          <p className={styles.name}>{product.name}</p>
          <p className={styles.price}>${product.discountPrice}</p>
        </div>
        <Btn iconName='cart' />
      </div>
    </article>
  );
}

export default ProductCard;