import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setAuthentication, resetState } from 'reduxStore/rootReducers/UserReducer/actions';
import isEmpty from 'helpers/isEmpty';

import logo from './logo.svg';

import './App.css';

function App() {
  const dispatch = useDispatch();
  const authSelector = useSelector((state) => state.auth);
  const [isCallAuthentication, setIsCallAuthentication] = useState(false);

  useEffect(() => {
    console.log(authSelector, 'authSelector'); // eslint-disable-line no-console

    if (isEmpty(authSelector.uuid) && !isCallAuthentication) {
      setIsCallAuthentication(true);
      dispatch(setAuthentication.request());
    } else if (!isEmpty(authSelector.uuid) && isCallAuthentication) {
      console.log('reset state here \/n'); // eslint-disable-line
      dispatch(resetState());
    }
  }, [authSelector]); // eslint-disable-line

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit
          {' '}
          <code className="text-red-500">src/App.js</code>
          {' '}
          and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
