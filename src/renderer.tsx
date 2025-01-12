import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './app';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


console.log('👋 This message is being logged by "renderer.ts", included via Vite');
