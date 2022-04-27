import { MessagePort, parentPort as port } from 'worker_threads';
import { Logger } from './logger/Logger';
import { createLogger } from './logger';

export function parentPort(logger?: Logger): MessagePort {
  if (!port) {
    logger = logger ?? createLogger('<unknown code>');
    logger.error('Tried to start service worker on the main thread.');
    logger.error('This is not supported. Please run the service worker in a worker thread.');

    process.exit(78); // configuration error
    throw Error('This code is meant to run on a worker thread!');
  }
  return port;
}
