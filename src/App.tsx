import './App.css';
import { Provider } from 'react-redux';
import store from './store/store';
import { router } from './routes';
import { RouterProvider } from 'react-router-dom';

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
