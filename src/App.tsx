import './App.css';
import { Provider } from 'react-redux';
import store from './store/store';
import { router } from './routes';
import { RouterProvider } from 'react-router-dom';
import React from 'react';

function App() {
  return (
    <div className='w-[100%]'>
      <div id='app'></div>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </div>
  );
}

export default App;
