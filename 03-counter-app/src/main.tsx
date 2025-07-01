import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './App';
// import { FirstApp } from './FirstApp';
import { CounterApp } from './CounterApp';

const root = document.getElementById('root');
ReactDOM.createRoot(root!).render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <FirstApp 
      title="Hola, soy Goku" 
      subtitle='123'
      name="Barbara"
    /> */}

    <CounterApp value={0} />
  </React.StrictMode>
)
