import styles from './btn.module.css';
import { MinusIcon } from '../../../assets/icons/minus';
import { PlusIcon } from '../../../assets/icons/plus';

type BtnValues = {
  text: string
  iconName: string 
  isActive: boolean
  styleProp: string
  onClick: () => void
}

type IconValues = {
  name?: string
}

const Btn: React.FC<Partial<BtnValues>> = ({ text, iconName, isActive=true, styleProp='', onClick }) => {
  const Icon: React.FC<IconValues> = ({name = 'default'}) => {
    if (name === 'minus') {
      return MinusIcon;
    } else if (name === 'plus') {
      return PlusIcon;
    }
  };

  return (
    <button className={`${styles.btn} ${ !isActive ? styles.btnInactive : '' } ${ !text ? styles.btnSquare : ''} ${styleProp}`} onClick={onClick}>
      { text 
      ? <>{text}</>
      : <Icon name={iconName} />
    }
    </button>
  )
}

export default Btn;