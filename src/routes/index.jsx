import JokesPage from '@/pages/JokesPage';
import { Navigate } from 'react-router-dom';

/**
 * @type {import('react-router-dom').RouteObject[]}
 */
export default [
  {
    path: '/',
    element: <JokesPage />,
  },
  {
    path: '/jokes',
    element: <JokesPage />,
  },
  {
    path: '*',
    element: <Navigate to="/jokes" />,
  },
];
