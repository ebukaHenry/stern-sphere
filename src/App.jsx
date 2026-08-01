import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';

import Layout from './components/Layout.jsx'; 
import Home from './pages/Home.jsx';
import Login from './features/auth/Login.jsx';
import Register from './features/auth/Register.jsx';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />, 
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: 'login',
        element: <Login />
      },
      {
        path: 'register',
        element: <Register />
      }
    ]
  }
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
