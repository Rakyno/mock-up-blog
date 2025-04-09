import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import PostList from './components/PostList';
import PostDetails from './components/PostDetails';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '', element: <PostList /> },
      { path: 'post/:id', element: <PostDetails /> }
    ]
  }
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
