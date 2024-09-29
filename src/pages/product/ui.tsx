import { Slider, ProductInfo } from '../../entities'
import styles from './productPage.module.css';
import { useGetProductByIdQuery } from './model/productSlice';
import { useLocation } from 'react-router-dom';
import { Title } from '../../share/ui/title';
import { Loader } from '../../share/ui/loader';


const ProductPage: React.FC = () => {
  const { pathname } = useLocation();
  const id = pathname.split('/').pop();

  const { data, isLoading, error } = useGetProductByIdQuery(id);

  if (isLoading) {
    return <Loader />;
  }
  
  if (error) {
    return <p>Error occured: {error.data.message}</p>;
  }
  
  if (data) {
    return (
      <main>
        <Title title={`${data.title} | Goods4you`} />
        <div className={styles.container}>
          <Slider thumbnail={data.thumbnail} images={data.images} />
          <ProductInfo product={data} />
        </div>
      </main>
    );
  }
  
}

export default ProductPage;
