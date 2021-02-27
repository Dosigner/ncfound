import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Component/App';
import {BrowserRouter} from 'react-router-dom';
//import {createStore} from 'redux'
//import reducers from './reducers';

//const store = createStore(reducers); 
//store를 만들고 store를 관리해주는 reducer와 연결한다.

const listener = () => {
  ReactDOM.render((
    <BrowserRouter>
      <App />
    </BrowserRouter>
    ),
    document.getElementById('root')
  );
};
//store.subscribe(listener); 
//store를 구독하면 store 데이터에 변화가 있을 때 listenener 내부의 render함수를 실행하고 변경된 데이터를 랜더링한다.
listener();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
