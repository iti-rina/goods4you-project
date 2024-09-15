import { Btn } from '../../../../share';
import styles from './hero.module.css';

const Hero: React.FC = () => {
  return (
    <section className={styles.heroSection} >
      <div className={styles.wrapper}>
        <h1 className={styles.title}>Any products from famous brands with worldwide delivery</h1>
        <p className={styles.subtitle}>We sell smartphones, laptops, clothes, shoes and many other products at low prices</p>
        <Btn text='Go to shopping' isActive={true} />
      </div>
    </section>
  );
}

export default Hero;