
const productReducers = (state=[],actions) => {
  switch (actions.type){
    case '@product/init':
      return actions.payload;
    case '@product/minor':
      return actions.payload.sort((a,b) => {
        if(a.precio<b.precio){
          return -1;
        }
        if(a.precio > b.precio){
          return 1;
        }
        return 0;
      })
      case '@product/major':
      return actions.payload.sort((a,b) => {
        if(a.precio<b.precio){
          return 1;
        }
        if(a.precio > b.precio){
          return -1;
        }
        return 0;
      })
      case '@product/alphabet':
      return actions.payload.sort((a,b) => {
        if(a.nombre<b.nombre){
          return -1;
        }
        if(a.nombre > b.nombre){
          return 1;
        }
        return 0;
      })
    default:
      return state
      
      
  }
}

export { productReducers}