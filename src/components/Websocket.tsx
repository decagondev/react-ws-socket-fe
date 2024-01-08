import { useContext, useState } from 'react';
import { WebsocketContext } from '../contexts/WebsocketContext';

type MessageType = { msg: string, content: string };

export const Websocket = () => {
    const [value, setValue] = useState('');
    const [messages, setMessages] = useState<MessageType[]>([]);
    const socket = useContext(WebsocketContext);

    return(
        <div>
            <h1>Websocket Messages</h1>
        </div>
    );
} 