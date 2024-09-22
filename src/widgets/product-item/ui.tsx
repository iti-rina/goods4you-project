import { Link } from 'react-router-dom';
import { Btn, Product } from '../../share';
import styles from './productItem.module.css';
import { useSelector } from 'react-redux';
import { selectCartProducts } from '../../pages/cart/model/cartSlice';
import { Control } from '../cart-item';

type ProductProps = {
  product: Product
}
const ProductCard: React.FC<ProductProps> = ({ product }) => {
  const cartProducts = useSelector(selectCartProducts);

  const findInCart = cartProducts.find(el => el.id === product.id);
  
  return (
    <Link to={`/product/${product.id}`}>
      <article className={styles.card}>
        <div className={styles.imageContainer}>
          <img src={product.thumbnail} alt={`Фотография-обложка товара ${product.title}`} className={styles.img} />
        </div>
        <div className={styles.infoWrapper}>
          <div className={`${styles.info} ${findInCart ? styles.cuttedInfo : ''}`}>
            <p className={styles.name}>{product.title}</p>
            <p className={styles.price}>${product.discountPercentage}</p>
          </div>
          { 
            findInCart ? <Control count={findInCart.quantity} /> : <Btn iconName='cart' />
          }
        </div>
      </article>
    </Link>
  );
}

export default ProductCard;