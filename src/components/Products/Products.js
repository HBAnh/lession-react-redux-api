import React, { Component } from "react";
class Products extends Component {
  render() {
    return (
      <div className="panel panel-success">
        <div className="panel-heading">
          <h3 className="panel-title">Danh Sách Sản Phẩm</h3>
        </div>
        <div className="panel-body">
          <table className="table  table-bordered table-hover">
            <thead>
              <tr>
                <th>STT</th>
                <th>Mã SP</th>
                <th>Tên Sản Phẩm</th>
                <th>Giá</th>
                <th>Trạng Thái</th>
                <th>Hành Động</th>
              </tr>
            </thead>
            <tbody>
              {/* danh sách sản phẩm */}
              {/* lay tu th cha ProductListPage */}
              {this.props.children}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Products;
