import "./App.css";
import React from "react";
import Menu from "./components/Menu/Menu";
import { Outlet } from "react-router-dom";

function App() {
  return (
        <div className="App">
            {/* Menu */}
            <Menu />
            
            <div className="container">
                <div className="row">
                    {/* hiển thị contents */}
                    <Outlet />
                </div>
            </div>
            
        </div>
    )
}

export default App;
