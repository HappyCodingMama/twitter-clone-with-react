import React from "react";
import { Avatar } from "@material-ui/core";
import "./Post.css";

function Post({ displayName, username, verified, text, image, avatar }) {
  return (
    <div className="post">
      <div className="post__avatar">
        <Avatar src="https://avatars.githubusercontent.com/u/67956944?s=400&v=4" />{" "}
      </div>
    </div>
  );
}

export default Post;
