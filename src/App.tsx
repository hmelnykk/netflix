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
import { FAQ } from './components/FAQ';
import { ModalWindow } from './components/ModalWindow';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root>
      <TrendingNow />
      <MoreReasonsToJoin />
      <FAQ />
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
    <div>
      <div id='app'></div>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </div>
  );
}

export default App;
