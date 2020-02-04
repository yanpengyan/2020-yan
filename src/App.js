import React, { Component } from 'react';
import RouterView from './router/index'
import config from './router/config'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store/index'
import {Style} from './style'
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Style> </Style>
        <BrowserRouter>
          <div className='app'>
            <RouterView routes={config} />
          </div>
        </BrowserRouter>
      </Provider>

    )
  }
}
export default App;