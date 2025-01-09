import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { WishlistProvider } from './context/WishlistContext';
import {BagProvider} from  './context/BagContext'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <WishlistProvider>
     <BagProvider>
      <App/>
      </BagProvider>
</WishlistProvider>
</React.StrictMode>
);

reportWebVitals();
