export type CartItemValues = {
  product: ProductValues
  quantity: number
}

const useCartItem = (item: CartItemValues) => {
  const changeQuantity = (type: 'inc' | 'dec') => {
    item.quantity = type === 'inc' ? +1 : -1
  }
  
  const deleteItem = () => {
    console.log('delete');
  }

  return {
    changeQuantity,
    deleteItem
  }
}

export default useCartItem