import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App'; // Use correct file extension based on your actual file type
import { AppState } from "./AppState"; // Use correct file extension based on your actual file type

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
  <AppState>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </AppState>
);
