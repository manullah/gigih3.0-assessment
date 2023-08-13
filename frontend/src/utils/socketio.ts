import io from 'socket.io-client';

export const mySocket = io(import.meta.env.VITE_API_URL);
