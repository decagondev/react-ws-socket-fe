import { createContext } from 'react';
import { io, Socket } from 'socket.io-client';
import dotenv from 'dotenv';

dotenv.config();
const server : string = process.env.REACT_WS_SERVER_URL as string;

export const socket = io(server);
export const WebsocketContext = createContext<Socket>(socket);
export const WebsocketProvider = WebsocketContext.Provider;