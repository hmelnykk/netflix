import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import store from './store/store';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './root';
import { Hero } from './components/Hero';
import { PageNotFound } from './components/PageNotFound';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root>
      <Hero />
    </Root>,
    errorElement: <Root>
      <PageNotFound />
    </Root>,
  },
  {
    path: '/sign-up',
    element: <Root>
      text
    </Root>,
    errorElement: <Root>
      <PageNotFound />
    </Root>,
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
