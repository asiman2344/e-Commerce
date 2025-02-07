// filepath: /c:/Users/MI Notebook PRO/OneDrive/Desktop/oggo.az/oggo/src/main.jsx
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { store } from './app/store';
import { Provider } from 'react-redux';
import { RouterProvider} from 'react-router-dom';
import router from './app/routers.jsx'

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={router}/>
  </Provider>
);