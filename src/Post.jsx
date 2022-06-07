import { Avatar } from "@material-ui/core";
import {
  ChatOutlined,
  SendOutlined,
  ShareOutlined,
  ThumbUpAltOutlined,
} from "@material-ui/icons";
import { forwardRef } from "react";
import ImportOption from "./ImportOption";
import "./post.css";
const Post = forwardRef(({ name, description, message, photoUrl }, ref) => {
  return (
    <div ref={ref} className="post">
      <div className="post__header">
        <Avatar src={photoUrl}>{name[0]}</Avatar>
        <div className="post__info">
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
      </div>
      <div className="post__body">
        <p>{message}</p>
      </div>
      <div className="post__buttons">
        <ImportOption Icon={ThumbUpAltOutlined} title="like" color={"gray"} />
        <ImportOption Icon={ChatOutlined} title="Comment" color={"gray"} />
        <ImportOption Icon={ShareOutlined} title="Share" color={"gray"} />
        <ImportOption Icon={SendOutlined} title="Send" color={"gray"} />
      </div>
    </div>
  );
});

export default Post;
