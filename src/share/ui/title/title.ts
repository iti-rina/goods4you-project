import { useEffect } from "react";

type TitlePropsType = {
  title: string
}

const Title: React.FC<TitlePropsType> = ({ title='Goods4you' }) => {
  useEffect(() => { document.title = title }, [title]);
  
  return null;
}

export default Title;