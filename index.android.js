import { Provider } from 'react-redux'
import React, { AppRegistry, Component } from 'react-native'
import configureStore from './store/configureStore'
import StoryList from './containers/StoryList.react'

const store = configureStore()

class ReactNativeRedux extends Component{
    render() {
        return (
            <Provider store={store}>
                <StoryList />
            </Provider>
        )
    }
}

AppRegistry.registerComponent('ReactNativeRedux', () => ReactNativeRedux)