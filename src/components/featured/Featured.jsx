import "./featured.scss";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

const Featured = () => {
  return (
    <div className="featured">
      <div className="top">
        <h1 className="title">お知らせの配信数 / チェックされた数</h1>
        <ExpandMoreIcon fontSize="small" />
      </div>
      <div className="bottom">
        <div className="featuredChart">
          <CircularProgressbar value={50} text={"50%"} strokeWidth={5} />
        </div>
        <p className="title">チェックされた数合計</p>
        <p className="amount">32</p>
        <p className="desc">20代男性が多く見ています。</p>
        <p className="summary">
          <div className="item">
            <div className="itemTitle">目標数</div>
            <div className="itemResult positive">
              <KeyboardArrowUpIcon fontSize="small" />
              <div className="resultAmount">50</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">先週</div>
            <div className="itemResult positive">
              <KeyboardArrowUpIcon fontSize="small" />
              <div className="resultAmount">56</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">先月</div>
            <div className="itemResult negative">
              <KeyboardArrowUpIcon fontSize="small" />
              <div className="resultAmount">123</div>
            </div>
          </div>
        </p>
      </div>
    </div>
  );
};

export default Featured;
