import 'dotenv/config';
import app from '../app';
import debug from 'debug';
import http from 'http';
import connectDB from '../config/db';

const port = normalizePort(process.env.PORT || '3000');
app.set('port', port);

const debugLog = debug("express-ts-mongodb:server"); // Tworzy instancję loggera

const server = http.createServer(app);

const start = async () => {
  try {
    await connectDB();

    server.listen(port);
    server.on('error', onError);
    server.on('listening', onListening);

  } catch (error) {
    console.error("🔴 Krytyczny błąd podczas uruchamiania aplikacji:", error);
    process.exit(1);
  }
};

start();




function normalizePort(val: string): number | string | false {
