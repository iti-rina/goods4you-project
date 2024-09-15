import { Btn, Product } from "../../share";

type ProductProps = {
  product: Product
}
const ProductCard: React.FC<ProductProps> = ({ product }) => {
  return (
    <article>
      <img src={product.coverImage} alt={`Фотография-обложка товара ${product.name}`} />
      <p>{product.name}</p>
      <p>{product.discountPrice}</p>
      <Btn iconName='cart' />
    </article>
  );
}

export default ProductCard;