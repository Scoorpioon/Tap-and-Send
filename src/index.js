import {Provider} from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Store from './global/redux/tests';
import LoginScreen from './components/login-section/loginScreen';
import LoginConnection from './components/login-section/loginConnection';
import './styles/index.css';
//import reportWebVitals from '../maybe later/reportWebVitals';

const Teia = createBrowserRouter([{
  path: '/',
  element: <App />
}, 
{
  path: '/login',
  element: <LoginScreen />
},
{
  path: '/login/try',
  element: <LoginConnection />
}]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={Store}>
      <RouterProvider router={Teia} />
    </Provider>
  </React.StrictMode>
);

//reportWebVitals();