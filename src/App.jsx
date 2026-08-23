import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext.jsx';
import './App.css';

import Layout from './components/Layout.jsx'; 
import Home from './pages/Home.jsx';
import Login from './features/auth/Login.jsx';
import Register from './features/auth/Register.jsx';
import ForgotPassword from './features/auth/ForgotPassword.jsx';
import About from './pages/About.jsx';
import Curriculum from './pages/Curriculum.jsx';
import Academics from './pages/Academics.jsx';
import Parents from './pages/Parents.jsx';
import Schools from './pages/Schools.jsx';
import Resources from './pages/Resources.jsx';
import Pricing from './pages/Pricing.jsx';

// Separate wrapper to ensure AuthProvider resides inside the router context lifecycle
function AppWithAuthContext() {
  return (
    <AuthProvider>
      <Outlet />
    </AuthProvider>
  );
}


const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />, 
    children: [
      {path: '/', element: <Home />},
      {path: 'login', element: <Login />},
      {path: 'register', element: <Register />},
      { path: 'forgot-password', element: <ForgotPassword /> },
      {path: 'about', element: <About />},
      {path: 'curriculum', element: <Curriculum />},
      {path: 'academics', element: <Academics />},
      {path: 'parents', element: <Parents />},
      {path: 'for-schools', element: <Schools />},
      {path: 'resources', element: <Resources />},
      {path: 'pricing', element: <Pricing />},
    ]
  }
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
