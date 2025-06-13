import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Header from './shared/layouts/header/header';
import Footer from './shared/layouts/footer/footer';
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
     <Header />
    <App />
    <Footer/>
  </React.StrictMode>
);


