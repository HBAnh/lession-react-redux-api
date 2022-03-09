import React, { Component } from "react";
import { connect } from "react-redux";
import Products from "../../components/Products/Products";
import ProductItem from "../../components/ProductItem/ProductItem";

class ProductListPage extends Component {
  render() {
    const {products} = this.props;

    return (
      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
        {/* nút thêm sản phẩm */}
        <button type="button" className="btn btn-primary mb-10">
          Thêm Sản Phẩm
        </button>
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
        return <ProductItem key={p.id} product={p} index={index}/>;
      });
    }
    return result;
  };
}
// chuyển state thành props
const mapStateToProps = state => {
    return{
        products :state.products, 
    }
}

export default connect(mapStateToProps,null)(ProductListPage);
