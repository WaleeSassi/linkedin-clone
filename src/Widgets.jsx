import { FiberManualRecord, InfoOutlined } from "@material-ui/icons";
import "./Widgets.css";
function Widgets(props) {
  const newArticle = (heading, subtitle) => {
    return (
      <div className="widgets__article">
        <div className="widget__articleleft">
          <FiberManualRecord />
        </div>
        <div className="widget__articleright">
          <h4>{heading}</h4>
          <p>{subtitle}</p>
        </div>
      </div>
    );
  };
  return (
    <div className="widgets">
      <div className="widgets__header">
        <h2>Linkedin News</h2>
        <InfoOutlined />
      </div>
      {newArticle("PAPA React is back", "Top News")}
      {newArticle("Corona Virus", "Top News")}
      {newArticle("Bitcoin Breaks $22k", "Crypto - 8000 readers")}
    </div>
  );
}

export default Widgets;
