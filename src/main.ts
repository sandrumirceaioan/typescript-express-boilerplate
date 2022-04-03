require('dotenv').config();
import { createServer } from './config/express';
import { AddressInfo } from 'net';
import http from 'http';
import * as emoji from 'node-emoji';

const host = process.env.HOST || 'localhost';
const port = process.env.PORT || '7777';
const rocket = emoji.get('rocket');

const startServer = () => {
    const app = createServer();
    const server = http.createServer(app).listen({ host, port }, () => {
        const addressInfo = server.address() as AddressInfo;
        console.log(`Server started at http://${addressInfo.address}:${addressInfo.port} ${rocket}`);
    });

    const signalTraps: NodeJS.Signals[] = ['SIGTERM', 'SIGINT', 'SIGUSR2'];
    signalTraps.forEach((type) => {
        process.once(type, async () => {
            console.log(`process.once ${type}`);
            server.close(() => {
                console.log('HTTP server closed :(');
            });
        });
    });
}

startServer();
