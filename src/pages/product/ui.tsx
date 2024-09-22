import { Slider, ProductInfo } from '../../entities'
import styles from './productPage.module.css';
import { useGetProductByIdQuery } from './model/productSlice';
import { useLocation } from 'react-router-dom';
import { Title } from '../../share/ui/title';


const ProductPage: React.FC = () => {
  const { pathname } = useLocation();
  const id = pathname.split('/').pop();

  const { data, isLoading, error } = useGetProductByIdQuery(id);
  console.log(data);

  if (isLoading) {
    return <p>Загрузка...</p>;
  }
  
  if (error) {
    return <p>Произошла ошибка: {error.message}</p>;
  }
  
  if (data) {
    return (
      <main>
        <Title title={`${data.title} | Goods4you`} />
        <div className={styles.container}>
          {isLoading && <p>Загрузка...</p>}
          {error && <p>Ошибка: {error}</p>}
  
          <Slider thumbnail={data.thumbnail} images={data.images} />
          <ProductInfo product={data} />
        </div>
      </main>
    );
  }
  
}

export default ProductPage;
