
const initProducts = (content) => {
  return{
    type: '@product/init',
    payload: content
  }
}

const priceMinorProducts = (content) => {
  return{
    type: '@product/minor',
    payload: content
  }
}

const priceMajorProducts = (content) => {
  return{
    type: '@product/major',
    payload: content
  }
}

const sortByAlphabetProducts = (content) => {
  return{
    type: '@product/alphabet',
    payload: content
  }
}
const addToCart = (content) => {
  return{
    type: '@cart/created',
    payload: content
  }
}

const initCart = (content) => {
  return{type: '@cart/init',
  payload: content,
  }
}

const actions = {
  initProducts,
  priceMinorProducts,
  priceMajorProducts,
  sortByAlphabetProducts,
  addToCart,
  initCart
}

export { actions }