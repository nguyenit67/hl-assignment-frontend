import { WEBSITE_TITLE } from '@/constants/common';
import { Helmet } from 'react-helmet-async';
import { useRoutes } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';

import '@/styles/_globals.less';
import '@/styles/Jokes.less';
import routes from './routes';

export default function App() {
  const routeElement = useRoutes(routes);

  return (
    <div className="app">
      <Helmet>
        <title>{WEBSITE_TITLE}</title>
      </Helmet>

      <MainLayout>{routeElement}</MainLayout>
    </div>
  );
}
