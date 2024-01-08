import { createContext } from 'react';
import { io, Socket } from 'socket.io-client';

const server : string = import.meta.env.VITE_SERVER_URL;

export const socket = io(server);
export const WebsocketContext = createContext<Socket>(socket);
export const WebsocketProvider = WebsocketContext.Provider;