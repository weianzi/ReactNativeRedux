import { Provider } from 'react-redux'
import React, { AppRegistry, Component } from 'react-native'
import configureStore from './store/configureStore'
import Member from './containers/Member.react'

const store = configureStore()

class ReactNativeRedux extends Component{
    render() {
        return (
            <Provider store={store}>
                <Member />
            </Provider>
        )
    }
}

AppRegistry.registerComponent('ReactNativeRedux', () => ReactNativeRedux)