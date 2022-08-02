import React from "react";
import "./navbar.scss";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="検索" />
          <SearchIcon />
        </div>
        <div className="items">
          <div className="item">日本語</div>
          <div className="item">
            <NotificationsIcon className="icon" />
            <div className="counter">1</div>
          </div>
          <div className="item">
            <div className="account">ログイン中：たびちず本舗</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
