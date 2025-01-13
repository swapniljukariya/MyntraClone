import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { WishlistProvider } from './context/WishlistContext';
import {BagProvider} from  './context/BagContext'
import { SearchProvider } from './context/SearchContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <WishlistProvider>
     <BagProvider>
      <SearchProvider>
      <App/>
      </SearchProvider>
      </BagProvider>
</WishlistProvider>
</React.StrictMode>
);

reportWebVitals();
