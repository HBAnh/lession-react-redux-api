import React, { Component } from "react";
class ProductAdd extends Component {
  render() {
    return (
      <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
        <div class="panel panel-primary">
          <div class="panel-heading">
            <h3 class="panel-title">Thêm Sản Phẩm</h3>
          </div>
          <div class="panel-body">
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
        </div>
      </div>
    );
  }
}

export default ProductAdd;
