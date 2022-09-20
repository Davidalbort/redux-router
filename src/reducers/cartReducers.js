
const cartReducers = (state=[], action) =>{
  switch(action.type){
    case '@cart/init':
      return action.payload;
    case '@cart/created':
      return[...state,action.payload];
    default:
      return state
  }
}

export {cartReducers}