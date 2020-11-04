import React, { useEffect } from 'react';
import Sidebar from './components/Sidebar'
import Chat from './components/Chat'
import './App.css';
import Pusher from 'pusher-js'

function App() {

useEffect(() => {
  var pusher = new Pusher('8ab09b5f25f4daadf04e', {
        cluster: 'us2'
      });

      var channel = pusher.subscribe('messages');
      channel.bind('inserted', function(data) {
        alert(JSON.stringify(data));
      });
}, [])

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
