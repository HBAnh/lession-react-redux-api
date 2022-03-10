import * as Types from "../constants/ActionTypes";
import callApi from "../utils/ApiCaller";

export const actFetchProductsRequest = () => {
  return (dispatch) => {
    return callApi("products", "GET", null).then((res) => {
      dispatch(actFetchProducts(res.data));
    });
  };
};

export const actFetchProducts = (products) => {
  return {
    type: Types.FETCH_PRODUCTS,
    products,
  };
};

// acction them
export const actAddroductRequest = (product) => {
  return dispatch => {
    return callApi(`products`, "POST", product).then((res) => {
        dispatch(actAddProduct(res.data));
    });
  };
};
export const actAddProduct = (product) => {
  return {
    type: Types.ADD_PRODUCT,
    product,
  };
};

//action get product theo id 
export const actGetProductByIdRequest = (id) => {
  return dispatch => {
    return callApi(`products/${id}`, "GET", null).then((res) => {
        dispatch(actGettProductById(res.data));
    });
  };
};
export const actGettProductById = (product) => {
  return {
    type: Types.EDIT_PRODUCT,
    product,
  };
};


//action sua product  
export const actUpdateProductRequest = (product) => {
  return dispatch => {
    return callApi(`products/${product.id}`, "PUT", product).then((res) => {
        dispatch(actUpdateProduct(res.data));
    });
  };
};
export const actUpdateProduct = (product) => {
  return {
    type: Types.UPDATE_PRODUCT,
    product,
  };
};

// action xoa
export const actDeleteProductRequest = (id) => {
  return dispatch => {
    return callApi(`products/${id}`, "DELETE", null).then((res) => {
        dispatch(actDeleteProduct(id));
    });
  };
};
export const actDeleteProduct = (id) => {
  return {
    type: Types.DELETE_PRODUCT,
    id,
  };
};
