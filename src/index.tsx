import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Provider } from 'react-redux';
import store from './store';
import ReactRouter from './router/ReactRouter';
import MusicProvider from './contexts/music/MusicProvider';
import './assets/styles/tailwind.css';
import './assets/styles/transitions.css';

const queryClient = new QueryClient();
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLDivElement);

if (process.env.NODE_ENV === 'development') {
  const { serviceWorker } = require('./api/development/browser');
  serviceWorker.start({ quiet: false, onUnhandledRequest: 'warn', serviceWorker: {url: '/r-spotify/mockServiceWorker.js'} });
}
if (process.env.NODE_ENV === 'production') {
  const { serviceWorker } = require('./api/development/browser');
  serviceWorker.start({ quiet: true, onUnhandledRequest: 'bypass', serviceWorker: {url: '/r-spotify/mockServiceWorker.js'} });
}

root.render(
  <Provider store={store}>
    <QueryClientProvider client={queryClient}>
      <MusicProvider>
        <ReactRouter />
      </MusicProvider>
    </QueryClientProvider>
  </Provider>
);
