import * as Types from '../constants/ActionTypes';
const initialState = [];

  const findIndex = (array, id) => {
    let result = -1;
    array.forEach((a, index) => {
      if (a.id === id) {
        result = index;
      }
    });
    return result;
  };

const products = (state = initialState, action) => {
        let index = -1;
        let { id,product } = action;
        switch(action.type){
            case Types.FETCH_PRODUCTS: // do~ product 
                state = action.products;
                return [...state];
            case Types.ADD_PRODUCT: // them product
                state.push(product);
                return [...state]
            case Types.UPDATE_PRODUCT: // sua product
                index = findIndex(state, product.id)
                state[index] = product;
                return [...state];
            case Types.DELETE_PRODUCT: // xoa product
                index = findIndex(state, id);
                state.splice(index, 1);
                return [...state];
            default:
                return [...state];
        }
};

export default products;