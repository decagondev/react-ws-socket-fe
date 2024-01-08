import { useContext, useState } from 'react';
import './App.css'
import { Websocket } from './components/Websocket';
import { WebsocketContext } from './contexts/WebsocketContext';

type MessageType = { msg: string, content: string };

function App() {
  const [value, setValue] = useState('');
  const [messages, setMessages] = useState<MessageType[]>([]);
  const socket = useContext(WebsocketContext);

  return (
    <div>
      <Websocket />
    </div>
  )
}

export default App
