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
      element: <TestComponent />
    },
  ]);