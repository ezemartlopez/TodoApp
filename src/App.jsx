import React from 'react';
import './App.css';
import BodyApp from './Components/Containers/BodyApp/BodyApp';
import {Provider} from 'react-redux';
import store from './StoreRedux/storeConfig/themeStore';
export default function App() {
  return (
    <Provider store={store}>
      <BodyApp></BodyApp>
    </Provider>
    
  )
}
