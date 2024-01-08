import './App.css'

import { socket, WebsocketProvider } from './contexts/WebsocketContext';
import { Websocket } from './components/Websocket';

function App() {


  return (
        <WebsocketProvider value={socket}>
          <Websocket />
        </WebsocketProvider>
  );
}

export default App
