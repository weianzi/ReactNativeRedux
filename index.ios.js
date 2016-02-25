/**
 * IOS 入口文件
 */
'use strict';
import React, { AppRegistry, Component } from 'react-native'
import {Provider } from 'react-redux'
import configureStore from './store/configureStore'
import App from './containers/App.react'

const store = configureStore()
 
class ReactNativeRedux extends Component{
    render() {
        return (
            <Provider store={store}>
                <App />
            </Provider>
        )
    }
}

AppRegistry.registerComponent('ReactNativeRedux', () => ReactNativeRedux);