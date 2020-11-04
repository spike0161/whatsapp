import React, { useEffect, useState } from "react";
import Sidebar from "./components/Sidebar";
import Chat from "./components/Chat";
import "./App.css";
import Pusher from "pusher-js";
import axios from "./axios.js";

function App() {
  // hook to set messages
  const [messages, setMessages] = useState([]);

  // grabs all the messages the first time only
  useEffect(() => {
    axios.get("http://localhost:9000/messages/sync").then((response) => {
      setMessages(response.data);
      console.log(response.data);
    });
  }, []);

  useEffect(() => {
    const pusher = new Pusher("8ab09b5f25f4daadf04e", {
      cluster: "us2",
    });

    const channel = pusher.subscribe("messages");
    channel.bind("inserted", (newMessage) => {
      alert(JSON.stringify(newMessage));
      setMessages([...messages, newMessage]);
    });

// unsubscribes the listener (mulitple people sending messages)
  return () => {
      channel.unbind_all();
      channel.unsubscribe();
    };
  }, [messages]);
  console.log(messages);
  return (
    <div className="app">
      <div className="app-body">
        <Sidebar />
        <Chat />
      </div>
    </div>
  );
}

export default App;
