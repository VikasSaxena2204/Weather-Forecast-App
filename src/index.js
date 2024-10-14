import React from 'react';
import ReactDOM from 'react-dom/client'; // Update for React 18
import './index.css';
import App from './App';
import * as serviceWorker from './ServiceWorker'; // Updated to the new service worker registration approach

// Create a root for rendering
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the App
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Register the service worker for offline capabilities (optional)
serviceWorker.unregister(); // Change to register() if you want to enable offline capabilities
