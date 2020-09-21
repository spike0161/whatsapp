import React from "react";
import { Avatar, IconButton } from "@material-ui/core";
import { AttachFile, MoreVert, SearchOutlined } from "/@material-ui/icons";
import "../css/Chat.css";

function Chat() {
  return (
    <div className="chat">
      <div className="chat-header">
        <Avatar />

        <div className="chat-header-info">
          <h3>Room Name</h3>
          <p>Last seen at...</p>
        </div>

        <div className="chat-header-right">
          <IconButton>
            <SearchOutlined />
          </IconButton>
          <IconButton>
            <AttachFile />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>
    </div>
  );
}

export default Chat;
