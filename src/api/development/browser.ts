import {setupWorker} from 'msw'
import routes from './routes';

export const serviceWorker = setupWorker(...routes)