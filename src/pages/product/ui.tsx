import { Slider, ProductInfo } from '../../entities'
import { productItem } from '../../../data'
import styles from './productPage.module.css';


const ProductPage: React.FC = () => {
  return (
    <main>
      <div className={styles.container}>
        <Slider images={productItem.images} />
        <ProductInfo product={productItem} />
      </div>
    </main>
  );
}

export default ProductPage;
