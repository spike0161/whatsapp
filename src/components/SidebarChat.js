import React from 'react'
import '../css/SidebarChat.css'
import { Avatar } from "@material-ui/core";


function SidebarChat() {
  return (
    <div className='sidebar-chat'>
    <Avatar />
    <div className="sidebarchat-info">
    <h2>Room Name</h2>
    <p>This is last message</p>
    </div>
    </div>
  )
}

export default SidebarChat
