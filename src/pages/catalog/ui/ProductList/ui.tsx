import { Product } from "../../../../share";
import ProductCard from "../../../../widgets/product-item/ui";
import styles from './productList.module.css';

type ProductListProps = {
  products: Product[]
}


const ProductList: React.FC<ProductListProps> = ({ products }) => {
  return (
    <div className={styles.container}>
      {products.map((product, i) => <ProductCard product={product} key={i}/>)}
    </div>
  );
}

export default ProductList;