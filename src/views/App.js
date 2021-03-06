import React, {
  useEffect
} from 'react';
import logo from './logo.svg';
import './App.css';
import store from '@/store'
import MyBlock from './main/RollBlock';
import { Provider } from 'react-redux'

function App() {
  console.log('aaa')
  useEffect(() => {
    store.subscribe(() => {
      console.log(store.getState())
    })
  }, [])
  return (
    <React.StrictMode>
      <Provider store={store}>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
            <MyBlock />
          </header>
        </div>
      </Provider>
    </React.StrictMode>
  )
}

export default App;
