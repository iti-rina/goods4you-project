import type { AddToCartValues } from "./types";
import { Btn } from "../../share";

const AddToCart: React.FC<AddToCartValues> = () => {
  return (
    <Btn iconName='cart'></Btn>
  )
}

export default AddToCart;