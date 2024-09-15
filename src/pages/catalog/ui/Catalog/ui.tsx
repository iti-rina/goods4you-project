import ProductList from "../ProductList/ui";
import { products } from '../../../../../data';

const Catalog: React.FC = () => {
  
  return (
    <section>
      <h2>Catalog</h2>
      <div>Search Bar</div>
      <ProductList products={products} />
    </section>
  );
}

export default Catalog;