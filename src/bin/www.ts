import 'dotenv/config';
import app from '../app';
import debug from 'debug';
import http from 'http';
import connectDB from '../config/db';

const debugLog = debug("express-ts-mongodb:server");

const port = normalizePort(process.env.PORT || '5001');
app.set('port', port);

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

/**
 * Normalizuje port do liczby, stringa lub false
 */
function normalizePort(val: string): number | string | false {
  const port = parseInt(val, 10);

  if (isNaN(port)) {
    // np. "pipe"
    return val;
  }

  if (port >= 0) {
    return port;
  }

  return false;
}

/**
 * Obsługa błędów serwera HTTP
 */
function onError(error: NodeJS.ErrnoException): void {
  if (error.syscall !== 'listen') {
    throw error;
  }

  const bind = typeof port === 'string'
      ? `Pipe ${port}`
      : `Port ${port}`;

  switch (error.code) {
    case 'EACCES':
      console.error(`🛑 ${bind} wymaga uprawnień administratora.`);
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(`🛑 ${bind} jest już używany.`);
      process.exit(1);
      break;
    default:
      throw error;
  }
}

/**
 * Log po uruchomieniu serwera
 */
function onListening(): void {
  const addr = server.address();
  const bind = typeof addr === 'string'
      ? `pipe ${addr}`
      : `port ${addr?.port}`;

  debugLog(`🚀 Serwer działa na ${bind}`);
}

