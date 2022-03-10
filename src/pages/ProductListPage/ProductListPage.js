import React, { Component } from "react";
import { connect } from "react-redux";
import Products from "../../components/Products/Products";
import ProductItem from "../../components/ProductItem/ProductItem";
import callApi from "../../utils/ApiCaller";
import { Link } from "react-router-dom";

class ProductListPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    };
  }

  // lifecyrcle hook
  componentDidMount() {
    callApi("products", "GET", null).then((res) => {
      this.setState({
        products: res.data,
      });
    });
  }

  render() {
    const { products } = this.state;

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
            onUpdateStatus={this.onUpdateStatus}
          />
        );
      });
    }
    return result;
  };

  // Hàm find index
  findIndex = (products, id) => {
    let result = -1;
    products.forEach((p, index) => {
      if (p.id === id) {
        result = index;
      }
    });
    return result;
  };

  // hàm xoá sản phẩm theo id
  onDelete = (id) => {
    const { products } = this.state;
    callApi(`products/${id}`, "DELETE", null) // endpoint = product/id thì mới dùng đc method DELETE
      .then((res) => {
        if (res.status === 200) {
          // đã thực thi thành công trên server
          let index = this.findIndex(products, id);
          if (index !== -1) {
            console.log(index);
            products.splice(index, 1);
            this.setState({
              products: products,
            });
          }
        }
      });
  };
  //Ham update status
  onUpdateStatus = (id) => {
    const {products} = this.state;
    console.log(products);
    // callApi(`products/${id}`, 'PUT', { status: }).then(res = > {})
  }
} // out class
// chuyển state thành props
const mapStateToProps = (state) => {
  return {
    products: state.products,
  };
};

export default connect(mapStateToProps, null)(ProductListPage);
