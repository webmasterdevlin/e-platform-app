import React, { Suspense, Fragment, lazy } from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';

import DashboardLayout from '../src/layouts/DashboardLayout';
import MainLayout from '../src/layouts/MainLayout';
import LoadingScreen from '../src/components/LoadingScreen';
import AuthGuard from '../src/components/AuthGuard';
import GuestGuard from '../src/components/GuestGuard';
import ReduxDemoLayout from './layouts/ReduxDemoLayout';
import OnRedirectCallback from './auth/components/on-redirect-callback';
import Elearning from './views/landing-pages-views/Elearning';

type Routes = {
  exact?: boolean;
  path?: string | string[];
  guard?: any;
  layout?: any;
  component?: any;
  routes?: Routes;
}[];

export const renderRoutes = (routes: Routes = []): JSX.Element => (
  <Suspense fallback={<LoadingScreen />}>
    <Switch>
      {routes.map((route, i) => {
        const Guard = route.guard || Fragment;
        const Layout = route.layout || Fragment;
        const Component = route.component;

        return (
          <Route
            key={i}
            path={route.path}
            exact={route.exact}
            render={props => (
              <Guard>
                <Layout>
                  {route.routes ? (
                    renderRoutes(route.routes)
                  ) : (
                    <Component {...props} />
                  )}
                </Layout>
              </Guard>
            )}
          />
        );
      })}
    </Switch>
  </Suspense>
);

const routes: Routes = [
  {
    exact: true,
    path: '/404',
    component: lazy(
      () => import('../src/views/dashboard-views/errors/NotFoundView'),
    ),
  },
  {
    exact: true,
    guard: GuestGuard,
    path: '/login',
    component: lazy(
      () => import('../src/views/dashboard-views/auth/LoginView'),
    ),
  },
  /*
  // Park here to see if this is still needed
  {
    exact: true,
    path: '/login-v2',
    component: lazy(() => import('../src/auth/components/LoginV2')),
  },*/
  {
    exact: true,
    path: '/authentication/callback',
    component: OnRedirectCallback,
  },
  {
    exact: true,
    path: '/login-unprotected',
    component: lazy(
      () => import('../src/views/dashboard-views/auth/LoginView'),
    ),
  },
  {
    exact: true,
    guard: GuestGuard,
    path: '/register',
    component: lazy(
      () => import('../src/views/dashboard-views/auth/RegisterView'),
    ),
  },
  {
    exact: true,
    path: '/register-unprotected',
    component: lazy(
      () => import('../src/views/dashboard-views/auth/RegisterView'),
    ),
  },
  {
    path: '/redux-demo',
    layout: ReduxDemoLayout,
    routes: [
      {
        exact: true,
        path: '/redux-demo/toolkit',
        component: lazy(
          () => import('../src/features/anti-heroes/pages/AntiHeroes'),
        ),
      },
      {
        exact: true,
        path: '/redux-demo/thunk',
        component: lazy(
          () => import('../src/features/villains/pages/Villains'),
        ),
      },
      {
        exact: true,
        path: '/redux-demo/saga',
        component: lazy(() => import('../src/features/heroes/pages/Heroes')),
      },
      {
        component: () => <Redirect to="/404" />,
      },
    ],
  },
  {
    path: '/app',
    guard: AuthGuard,
    layout: DashboardLayout,
    routes: [
      {
        exact: true,
        path: '/app/account',
        component: lazy(
          () => import('../src/views/dashboard-views/account/AccountView'),
        ),
      },
      {
        exact: true,
        path: '/app/lesson-ad',
        component: lazy(
          () => import('../src/views/dashboard-views/lesson/LessonAdView'),
        ),
      },
      {
        exact: true,
        path: '/app/calendar',
        component: lazy(
          () => import('../src/views/dashboard-views/calendar/CalendarView'),
        ),
      },
      {
        exact: true,
        path: ['/app/chat/new', '/app/chat/:threadKey'],
        component: lazy(
          () => import('../src/views/dashboard-views/chat/ChatView'),
        ),
      },
      {
        exact: true,
        path: '/app/chat',
        component: () => <Redirect to="/app/chat/new" />,
      },
      {
        exact: true,
        path: '/app/extra/charts/apex',
        component: lazy(
          () =>
            import('../src/views/dashboard-views/extra/charts/ApexChartsView'),
        ),
      },
      {
        exact: true,
        path: '/app/extra/forms/formik',
        component: lazy(
          () => import('../src/views/dashboard-views/extra/forms/FormikView'),
        ),
      },
      {
        exact: true,
        path: '/app/extra/forms/redux',
        component: lazy(
          () =>
            import('../src/views/dashboard-views/extra/forms/ReduxFormView'),
        ),
      },
      {
        exact: true,
        path: '/app/extra/editors/draft-js',
        component: lazy(
          () =>
            import(
              '../src/views/dashboard-views/extra/editors/DraftEditorView'
            ),
        ),
      },
      {
        exact: true,
        path: '/app/extra/editors/quill',
        component: lazy(
          () =>
            import(
              '../src/views/dashboard-views/extra/editors/QuillEditorView'
            ),
        ),
      },
      {
        exact: true,
        path: '/app/kanban',
        component: lazy(
          () => import('../src/views/dashboard-views/kanban/KanbanView'),
        ),
      },
      {
        exact: true,
        path: [
          '/app/mail/label/:customLabel/:mailId?',
          '/app/mail/:systemLabel/:mailId?',
        ],
        component: lazy(
          () => import('../src/views/dashboard-views/mail/MailView'),
        ),
      },
      {
        exact: true,
        path: '/app/mail',
        component: () => <Redirect to="/app/mail/all" />,
      },
      {
        exact: true,
        path: '/app/management/customers',
        component: lazy(
          () =>
            import('../src/views/dashboard-views/customer/CustomerListView'),
        ),
      },
      {
        exact: true,
        path: '/app/management/customers/:customerId',
        component: lazy(
          () =>
            import('../src/views/dashboard-views/customer/CustomerDetailsView'),
        ),
      },
      {
        exact: true,
        path: '/app/management/customers/:customerId/edit',
        component: lazy(
          () =>
            import('../src/views/dashboard-views/customer/CustomerEditView'),
        ),
      },
      {
        exact: true,
        path: '/app/management/invoices',
        component: lazy(
          () => import('../src/views/dashboard-views/invoice/InvoiceListView'),
        ),
      },
      {
        exact: true,
        path: '/app/management/invoices/:invoiceId',
        component: lazy(
          () =>
            import('../src/views/dashboard-views/invoice/InvoiceDetailsView'),
        ),
      },
      {
        exact: true,
        path: '/app/management/orders',
        component: lazy(
          () => import('../src/views/dashboard-views/order/OrderListView'),
        ),
      },
      {
        exact: true,
        path: '/app/management/orders/:orderId',
        component: lazy(
          () => import('../src/views/dashboard-views/order/OrderDetailsView'),
        ),
      },
      {
        exact: true,
        path: '/app/management/products',
        component: lazy(
          () => import('../src/views/dashboard-views/product/ProductListView'),
        ),
      },
      {
        exact: true,
        path: '/app/management/products/create',
        component: lazy(
          () =>
            import('../src/views/dashboard-views/product/ProductCreateView'),
        ),
      },
      {
        exact: true,
        path: '/app/management',
        component: () => <Redirect to="/app/management/customers" />,
      },
      {
        exact: true,
        path: '/app/projects/overview',
        component: lazy(
          () => import('../src/views/dashboard-views/project/OverviewView'),
        ),
      },
      {
        exact: true,
        path: '/app/projects/browse',
        component: lazy(
          () =>
            import('../src/views/dashboard-views/project/ProjectBrowseView'),
        ),
      },
      {
        exact: true,
        path: '/app/projects/create',
        component: lazy(
          () =>
            import('../src/views/dashboard-views/project/ProjectCreateView'),
        ),
      },
      {
        exact: true,
        path: '/app/projects/:id',
        component: lazy(
          () =>
            import('../src/views/dashboard-views/project/ProjectDetailsView'),
        ),
      },
      {
        exact: true,
        path: '/app/projects',
        component: () => <Redirect to="/app/projects/browse" />,
      },
      {
        exact: true,
        path: '/app/reports/dashboard',
        component: lazy(
          () => import('../src/views/dashboard-views/reports/DashboardView'),
        ),
      },
      {
        exact: true,
        path: '/app/reports/dashboard-alternative',
        component: lazy(
          () =>
            import(
              '../src/views/dashboard-views/reports/DashboardAlternativeView'
            ),
        ),
      },
      {
        exact: true,
        path: '/app/reports',
        component: () => <Redirect to="/app/reports/dashboard" />,
      },
      {
        exact: true,
        path: '/app/social/feed',
        component: lazy(
          () => import('../src/views/dashboard-views/social/FeedView'),
        ),
      },
      {
        exact: true,
        path: '/app/social/profile',
        component: lazy(
          () => import('../src/views/dashboard-views/social/ProfileView'),
        ),
      },
      {
        exact: true,
        path: '/app/social',
        component: () => <Redirect to="/app/social/profile" />,
      },
      {
        exact: true,
        path: '/app',
        component: () => <Redirect to="/app/reports/dashboard" />,
      },
      {
        component: () => <Redirect to="/404" />,
      },
    ],
  },
  {
    path: '*',
    layout: MainLayout,
    routes: [
      {
        exact: true,
        path: '/',
        component: Elearning,
      },
      {
        exact: true,
        path: '/about',
        component: lazy(() => import('../src/views/landing-pages-views/About')),
      },
      {
        exact: true,
        path: '/contact',
        component: lazy(
          () =>
            import('../src/views/landing-pages-views/ContactPageSidebarMap'),
        ),
      },
      {
        component: () => <Redirect to="/404" />,
      },
    ],
  },
];

export default routes;
