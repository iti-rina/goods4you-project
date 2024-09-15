import styles from './btn.module.css';

type BtnValues = {
  text: string
  iconName: string
  isActive: boolean
}

type IconValues = {
  name?: string
}

const Btn: React.FC<Partial<BtnValues>> = ({ text, iconName, isActive=true }) => {
  const Icon: React.FC<IconValues> = ({name = 'default'}) => <div>{name}</div>;

  return (
    <button className={`${styles.btn} ${ !isActive ? styles.btnInactive : '' } ${ !text ? styles.btnSquare : ''}`}>
      { text 
      ? <span>{text}</span> 
      : <Icon name={iconName} />
    }
    </button>
  )
}

export default Btn;