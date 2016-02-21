/**
 * IOS 入口文件
 */
import 'babel-polyfill';
import React, { AppRegistry } from 'react-native';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import reducer from './reducers';
import { getListDatas } from './actions';
import App from './containers/App';
//import WebList from './views/WebList.react';

const middleware = process.env.NODE_ENV === 'production' ? [thunk] : [thunk, logger()];
const store = createStore(reducer, applyMiddleware(...middleware));

var ReactNativeRedux = React.createClass({
    render: function(){
        return (
        	<Provider store={store}>
        		<App />
        	</Provider>
        );
    }
});

AppRegistry.registerComponent('ReactNativeRedux', () => ReactNativeRedux);