import { FC } from 'react';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import { Layout } from 'shared/ui/layout';
import { Header } from 'widgets/header';
import SideBar from 'widgets/side-bar/ui';
import { Autorization } from './autorization/ui';
import { Profile } from './profile/ui';
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
  {
    element: (
      <Layout header={<Header />} main={<Outlet />} sideBar={<SideBar />} />
    ),
    children: [
      {
        path: '/profile',
        element: <Profile />,
      },
    ],
  },
]);

const Pages: FC = () => <RouterProvider router={router} />;

export default Pages;
