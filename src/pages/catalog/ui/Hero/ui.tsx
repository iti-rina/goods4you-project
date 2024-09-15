import { Btn } from '../../../../share';
import styles from './hero.module.css';

const Hero: React.FC = () => {
  return (
    <section className={styles.heroSection} >
      <h1>Any products from famous brands with worldwide delivery</h1>
      <p>We sell smartphones, laptops, clothes, shoes and many other products at low prices</p>
      <Btn text='Go to shopping' isActive={true} />
    </section>
  );
}

export default Hero;