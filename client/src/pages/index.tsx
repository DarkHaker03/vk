import { FC } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Autorization } from './autorization/ui';
import { Registration } from './registration/ui';

const router = createBrowserRouter([
  {
    path: '/autorization',
    element: <Autorization />,
  },
  {
    path: '/registration',
    element: <Registration />,
  },
]);

const Pages: FC = () => <RouterProvider router={router} />;

export default Pages;
