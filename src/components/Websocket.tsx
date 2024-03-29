import { useContext, useState, useEffect } from 'react';
import { uuid } from 'uuidv4';
import { WebsocketContext } from '../contexts/WebsocketContext';

type MessageType = { msg: string, content: string };

export const Websocket = () => {
    const [value, setValue] = useState('');
    const [messages, setMessages] = useState<MessageType[]>([]);
    const socket = useContext(WebsocketContext);

    useEffect(() => {
        socket.on('connect', () => {
          console.log('Connected!');
        });
        socket.on('onMessage', (newMessage: MessageType) => setMessages((prev) => [...prev, newMessage]));
        return () => {
          socket.off('connect');
          socket.off('onMessage');
        };
      }, []);
    

    const onSubmit = () => {
        socket.emit('newMessage', value);
        setValue('');
      };


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
            <input type="text" value={value} onChange={(e) => setValue(e.target.value)} />
            <button onClick={onSubmit}>Send</button>
        </div>
    );
} 