import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-supabase';
import { supabase } from './client'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <React.StrictMode>
      <Provider value={supabase}>
         <App />
      </Provider>
   </React.StrictMode>
);
