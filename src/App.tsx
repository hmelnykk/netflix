import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import store from './store/store';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './root';
import { Hero } from './components/Hero';
import { PageNotFound } from './components/PageNotFound';
import { TrendingNow } from './components/TrendingNow';
import { SecondaryLayout } from './components/layouts/SecondaryLayout';
import { SignUpForm } from './components/SignUpForm';
import { MoreReasonsToJoin } from './components/MoreReasonsToJoin';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root>
      <TrendingNow />
      <MoreReasonsToJoin />
    </Root>,
    errorElement: <Root>
      <PageNotFound />
    </Root>,
  },
  {
    path: '/sign-up',
    element: <SecondaryLayout>
      <SignUpForm />
    </SecondaryLayout>,
    errorElement: <Root>
      <PageNotFound />
    </Root>,
  },
  {
    path: '/films',
    element: <Root>
      text
    </Root>,
    errorElement: <Root>
      <PageNotFound />
    </Root>,
    children: [
      {
        path: '/films/:filmId',
        element: <></>,
      }
    ]
  },
  {
    path: '/test',
    element: <>another test text</>
  },
]);

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router}/>
    </Provider>
  );
}

export default App;
