import React, { Component } from "react";
class ProductAdd extends Component {
  render() {
    return (
      <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
        <h1>Thêm Sản Phẩm</h1>
        <form>
          <div className="form-group">
            <label>Tên sản phẩm</label>
            <input type="text" className="form-control" name="name" />
          </div>
          <div className="form-group">
            <label>Giá</label>
            <input type="text" className="form-control" name="price" />
          </div>
          <div className="form-group">
            <label>Trạng thái</label>
            <div className="checkbox">
              <label>
                <input type="checkbox" name="status" />
                Còn hàng
              </label>
            </div>
          </div>
          <button type="submit" className="btn btn-primary">
            Lưu
          </button>
        </form>
      </div>
    );
  }
}

export default ProductAdd;
