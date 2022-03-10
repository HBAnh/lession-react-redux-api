import React, { Component } from "react";
import callApi from "../../utils/ApiCaller";
import {Link} from 'react-router-dom'
class ProductForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      txtName: "",
      txtPrice: "",
      chkbStatus: "",
    };
  }
  render() {
    const { id,txtName, txtPrice, chkbStatus } = this.state;
    return (
      <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
        <div className="panel panel-primary">
          <div className="panel-heading">
            <h3 className="panel-title">{id === "" ? 'Thêm Sản Phẩm' : 'Cập Nhập Sản Phẩm'}</h3>
          </div>
          <div className="panel-body">
            <form onSubmit={this.onSave}>
              <div className="form-group">
                <label>Tên sản phẩm</label>
                <input
                  type="text"
                  required
                  className="form-control"
                  name="txtName"
                  value={txtName}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label>Giá</label>
                <input
                  type="number"
                  required
                  className="form-control"
                  name="txtPrice"
                  value={txtPrice}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label>Trạng thái</label>
                <div className="checkbox">
                  <label>
                    <input
                      type="checkbox"
                      name="chkbStatus"
                      value={chkbStatus}
                      onChange={this.onChange}
                      checked={chkbStatus}
                    />
                    Còn hàng
                  </label>
                </div>
              </div>
              <button type="submit" className="btn btn-primary mr-10" >
                Lưu
              </button>
              <Link to="/products" className="btn btn-warning float-r">Trở lại</Link>
            </form>
          </div>
        </div>
      </div>
    );
  } //out render()

  //lifecycle 
  componentDidMount(){
    const id = this.props.productId;
    if(id){
      callApi(`products/${id}`, 'GET', null).then(res => {
        const data = res.data;
        this.setState({
          id: data.id,
          txtName: data.name,
          txtPrice: data.price,
          chkbStatus: data.status
        })
      })
    }
  }

  // ham onChange muti Input
  onChange = (e) => {
    let target = e.target;
    let name = target.name;
    let value = target.type === "checkbox" ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }
  // ham luu 
  onSave = (e) => {
    e.preventDefault();
    let { id,txtName, txtPrice, chkbStatus }= this.state;
    const navigate = this.props.navigation;
    if(id){ // edit san pham
        callApi(`products/${id}`, 'PUT', {
            name: txtName,
            price: txtPrice,
            status: chkbStatus
        }).then(res => {
            navigate('/products')
        })
    } else { // add san pham
      callApi('products','POST',{
        name: txtName,
        price: txtPrice,
        status: chkbStatus
    }).then(res => {
        navigate('/products');
    })
    }
  }

}

export default ProductForm;
