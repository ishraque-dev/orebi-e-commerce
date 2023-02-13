import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { RootLayout } from './components/Layouts';
import Home from './pages/Home';
import Shop from './pages/Shop';
import About from './pages/About';
import ErrorPage from './pages/Error';
function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: '/shop',
          element: <Shop />,
        },
        {
          path: '/about',
          element: <About />,
        },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
