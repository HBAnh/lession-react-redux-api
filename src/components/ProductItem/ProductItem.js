import React, { Component } from "react";
import { Link } from "react-router-dom";
class ProductItem extends Component {
  render() {
    const { product, index } = this.props;
    return (
      <tr>
        {/* số thứ tự */}
        <td>{index + 1}</td>
        {/* id sản phẩm*/}
        <td>{product.id}</td>
        {/* tên sản phẩm */}
        <td>{product.name}</td>
        {/* giá sản phẩm */}
        <td>{product.price}</td>
        <td>
          <span
            className={`label label-${
              product.status ? "success" : "warning"
            } pd-5 `} // chuyển màu của trạng thái
          >
            {/* hiển thị status */}
            {product.status ? "Còn hàng" : "Hết hàng"}
          </span>
        </td>
        <td>
          {/* nút sửa */}
          <Link
            to={`/products/${product.id}/edit`}
            className="btn btn-warning mr-10"
          >
            Sửa
          </Link>
          {/* nút xoá */}
          <button
            type="button"
            className="btn btn-danger"
            onClick={() => this.onDelete(product.id)}
          >
            Xoá
          </button>
        </td>
      </tr>
    );
  }
  // Hàm xoá
  onDelete = (id) => {
    // eslint-disable-next-line no-restricted-globals
    if (confirm("Bạn chắc muốn xoá?")) {
      this.props.onDelete(id);
    }
  };
}

export default ProductItem;
