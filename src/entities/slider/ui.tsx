import styles from './slider.module.css';
import {useState} from 'react'

export type SliderValues = {
  images: Array<string>;
}

const Slider: React.FC<SliderValues> = ({images}) => {
  const [activeImage, setActiveImage] = useState<string>(images[0])

  return (
    <div className={styles.container}>
      <div className={styles.activeImage} style={{
        backgroundImage: `url(${activeImage})`
      }}/>
      <div className={styles.images}>
        {images.map((item, i) =>
          <div className={styles.item} key={i}>
            <div className={styles.item}
                 style={{backgroundImage: `url(${item})`}}
                 onClick={() => setActiveImage(item)}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default Slider;
