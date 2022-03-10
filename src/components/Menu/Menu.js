import React, { Component } from "react";
import { Link } from "react-router-dom";

class Menu extends Component {
  render() {
    return (
      <div className="navbar navbar-default">
        <span className="navbar-brand">Call API</span>
        <ul className="nav navbar-nav">
          <li >
            <Link className="my-link" to="/" >Trang Chủ</Link>
          </li>
          <li>
            <Link className="my-link" to="/products" >Quản Lý Sản Phẩm</Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default Menu;
