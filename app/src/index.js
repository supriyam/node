import React from 'react';
import ReactDOM from 'react-dom';
import { createStore,applyMiddleware,compose } from 'redux';
import { Provider } from 'react-redux';
import { createLogger } from 'redux-logger';
import createHistory from "history/createBrowserHistory";
import { syncHistoryWithStore } from 'react-router-redux';
import thunk from 'redux-thunk';
import reducer from './reducers';
import './index.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';

const middleware = [thunk];
if(process.env.production === 'production'){
    middleware.push(createLogger())
}

const history = createHistory({
    basename: "/"
  });
//const history = syncHistoryWithStore(browserHistory,store);
const initialState = Object.assign({}, window.INITIAL_STATE);
const enhancer = compose(applyMiddleware(...middleware),
window.devToolsExtension ? window.devToolsExtension() : f => f )// add support for Redux dev tools
const store = createStore(
    reducer,
    initialState,
    enhancer

)


ReactDOM.render(
<Provider store = {store}>
<App history ={history}/> 
</Provider>,
document.getElementById('root'))
registerServiceWorker()
