import React from 'react';

const HomePage = React.lazy(() => import('components/pages/HomePage'));
const Page404 = React.lazy(() => import('components/pages/Page404'));

const routes = [
  {
    path: '/', exact: true, name: 'HomePage', component: HomePage, isRequiredAuthRequired: true,
  },
  {
    path: '/not-found', exact: true, name: '404', component: Page404,
  },
];

export default routes;
