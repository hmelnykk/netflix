import { createBrowserRouter } from 'react-router-dom';
import Root from './root';
import { TrendingNow } from './components/TrendingNow';
import { MoreReasonsToJoin } from './components/MoreReasonsToJoin';
import { FAQ } from './components/FAQ';
import { SecondaryLayout } from './components/layouts/SecondaryLayout';
import { PageNotFound } from './components/PageNotFound';
import { SignUpForm } from './components/SignUpForm';
import React from 'react';
import { TestComponent } from './components/TestComponent';
import { FilmPage } from './components/FilmPage';
import { loader as filmLoader } from './components/FilmPage/FilmPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Root>
      <TrendingNow />
      <MoreReasonsToJoin />
      <FAQ />
    </Root>,
    errorElement: <SecondaryLayout>
      <PageNotFound />
    </SecondaryLayout>,
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
    path: '/films/:filmId',
    loader: filmLoader,
    element: <SecondaryLayout>
      <FilmPage />
    </SecondaryLayout>,
    errorElement: <SecondaryLayout>
      <PageNotFound />
    </SecondaryLayout>,
  },
  {
    path: '/test',
    element: <TestComponent />
  },
]);