import React, { Component } from "react";
import { connect } from "react-redux";
import Products from "../../components/Products/Products";
import ProductItem from "../../components/ProductItem/ProductItem";
import { Link } from "react-router-dom";
import {
  actDeleteProductRequest,
  actFetchProductsRequest,
} from "../../actions/index";

class ProductListPage extends Component {
  // lifecyrcle hook
  componentDidMount() {
    this.props.fetchAllProducts();
  }

  render() {
    const { products } = this.props;

    return (
      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
        {/* nút thêm sản phẩm */}
        <Link to="/products/add" className="btn btn-primary mb-10">
          Thêm Sản Phẩm
        </Link>
        {/* Danh sách sản phẩm */}
        <Products>{this.showProductItem(products)}</Products>
      </div>
    );
  }
  // hàm hiển thị danh sách sản phẩm
  showProductItem = (products) => {
    let result = null;
    if (products.length > 0) {
      result = products.map((p, index) => {
        return (
          <ProductItem
            key={p.id}
            product={p}
            index={index}
            onDelete={this.onDelete}
          />
        );
      });
    }
    return result;
  };

  // hàm xoá sản phẩm theo id
  onDelete = (id) => {
    this.props.onDeleteProduct(id);
  };
} // out class
// chuyển state thành props
const mapStateToProps = (state) => {
  return {
    products: state.products,
  };
};
const mapDispatchToProps = (dispatch, props) => {
  return {
    fetchAllProducts: () => {
      dispatch(actFetchProductsRequest());
    },
    onDeleteProduct: (id) => {
      dispatch(actDeleteProductRequest(id));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ProductListPage);
