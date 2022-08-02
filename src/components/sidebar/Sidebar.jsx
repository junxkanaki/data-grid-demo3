import React from "react";
import "./sidebar.scss";
import { Link } from "react-router-dom";
import SendIcon from "@mui/icons-material/Send";
import DashboardIcon from "@mui/icons-material/Dashboard";
import LogoutIcon from "@mui/icons-material/Logout";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useContext } from "react";
import { DarkModeContext } from "../../context/darkModeContext";

const Sidebar = () => {
  const { dispatch } = useContext(DarkModeContext);
  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">たびちず for ストア</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">メインメニュー</p>
          <Link to="/" style={{ textDecoration: "none" }}>
            <li>
              <DashboardIcon className="icon" />
              <span>トップページ</span>
            </li>
          </Link>
          <Link to="/users" style={{ textDecoration: "none" }}>
            <li>
              <AccountCircleIcon className="icon" />
              <span>ユーザ情報</span>
            </li>
          </Link>
          <Link to="/products/new" style={{ textDecoration: "none" }}>
            <li>
              <SendIcon className="icon" />
              <span>お知らせ登録</span>
            </li>
          </Link>
          <Link to="/" style={{ textDecoration: "none" }}>
            <li>
              <LogoutIcon className="icon" />
              <span>ログアウト</span>
            </li>
          </Link>
        </ul>
      </div>
      <div className="bottom">
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "LIGHT" })}
        ></div>
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "DARK" })}
        ></div>
        <div className="colorOption"></div>
      </div>
    </div>
  );
};

export default Sidebar;
