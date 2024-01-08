import { useContext, useState } from 'react';
import { uuid } from 'uuidv4';
import { WebsocketContext } from '../contexts/WebsocketContext';

type MessageType = { msg: string, content: string };

export const Websocket = () => {
    const [value, setValue] = useState('');
    const [messages, setMessages] = useState<MessageType[]>([]);
    const socket = useContext(WebsocketContext);

    return(
        <div>
            <h1>Websocket Messages</h1>
            <div>
                {messages.length === 0 ? (<div>No Messages</div>) : (
                    <div>
                        {messages.map((msg) => (
                            <div key={uuid()}>
                                <p>{msg.content}</p>
                            </div>
                        ))}
                    </div>
                )}
            </div>
            Message: 
            <input type="text" />
            <button>Send</button>
        </div>
    );
} 