import "./widget.scss";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PersonIcon from "@mui/icons-material/Person";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LocalAtmIcon from "@mui/icons-material/LocalAtm";
import { MonetizationOn } from "@mui/icons-material";

const Widget = ({ type }) => {
  let data;
  const amount = 100;
  const diff = 20;
  switch (type) {
    case "user":
      data = {
        title: "お気に入り人数",
        isMoney: false,
        link: "詳細を見る",
        icon: (
          <PersonIcon
            className="icon"
            style={{ color: "crimson", backgroundColor: "pink" }}
          />
        )
      };
      break;
    case "order":
      data = {
        title: "受信したユーザ数",
        isMoney: false,
        link: "詳細を見る",
        icon: <ShoppingCartIcon className="icon" />
      };
      break;
    case "earning":
      data = {
        title: "チェックされた数",
        isMoney: true,
        link: "詳細を見る",
        icon: (
          <MonetizationOn
            className="icon"
            style={{ color: "crimson", backgroundColor: "gold" }}
          />
        )
      };
      break;
    case "balance":
      data = {
        title: "EC売り上げ",
        isMoney: true,
        link: "収支を確認する",
        icon: <AccountBalanceIcon className="icon" />
      };
      break;
    default:
      break;
  }
  return (
    <div className="widget">
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">
          {amount}
          {data.isMoney && "円"}
        </span>
        <span className="link">{data.link}</span>
      </div>
      <div className="right">
        <div className="percentage positive">
          <KeyboardArrowUpIcon /> {diff}%
        </div>
        {data.icon}
      </div>
    </div>
  );
};

export default Widget;
