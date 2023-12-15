import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { AppProvider } from './components/Context';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools'; // Corrected import

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppProvider>
      <QueryClientProvider client={queryClient}>
        <App />
        <ReactQueryDevtools /> {/* Add React Query Devtools for development purposes */}
      </QueryClientProvider>
    </AppProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
