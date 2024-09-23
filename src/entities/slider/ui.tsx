import styles from './slider.module.css';
import {useState} from 'react'

export type SliderValues = {
  thumbnail: string;
  images: Array<string>;
}

const Slider: React.FC<SliderValues> = ({ thumbnail, images }) => {
  const [activeImage, setActiveImage] = useState<string>(thumbnail)

  return (
    <div className={styles.container}>
      <div className={styles.activeImage} style={{
        backgroundImage: `url(${activeImage})`
      }}/>
      { images.length === 1 
      ? null 
      : (<div className={styles.images}>
        {images.map((item, i) =>
          <div className={styles.item} key={i}>
            <div className={styles.item}
                style={{backgroundImage: `url(${item})`}}
                onClick={() => setActiveImage(item)}
            />
          </div>
        )}
      </div>)
    }

    </div>
  );
}

export default Slider;
