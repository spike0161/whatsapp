import React from "react";
import { Avatar, IconButton } from "@material-ui/core";
import { AttachFile, MoreVert, SearchOutlined } from "@material-ui/icons";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import MicIcon from "@material-ui/icons/Mic";
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

      <div className="chat-body">
        <p className="chat-message">
          <span className="chat-name">Dean</span>
          This is a message
          <span className="chat-timestamp">{new Date().toUTCString()}</span>
        </p>

        <p className="chat-message chat-reciever">
          <span className="chat-name">Dean</span>
          This is a message
          <span className="chat-timestamp">{new Date().toUTCString()}</span>
        </p>

        <p className="chat-message">
          <span className="chat-name">Dean</span>
          This is a message
          <span className="chat-timestamp">{new Date().toUTCString()}</span>
        </p>
      </div>

      <div className="chat-footer">
        <InsertEmoticonIcon />
        <form>
          <input type="text" placeholder="Type a message..."/>
          <button type="submit" >
            Send a message
          </button>
        </form>
        <MicIcon />
      </div>
    </div>
  );
}

export default Chat;
