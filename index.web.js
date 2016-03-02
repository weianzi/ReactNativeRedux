import {Provider} from 'react-redux'
import React, {
    AppRegistry, StyleSheet, TouchableOpacity, View, Text, Component, Navigator,
}
from 'react-native'
import configureStore from './store/configureStore'
import MainTabBar from './MainTabBar.react'
import StoryDetail from './containers/StoryDetail.react'
import StoryList from'./containers/StoryList.react'

const store = configureStore()

let NavigationBarRouteMapper = {
    LeftButton: function(route, navigator, index, navState) {
        if (index === 0) {
            return null;
        }
        return (
            <TouchableOpacity
                onPress={() => navigator.pop()}
                style={styles.navBarLeftButton}>
                <Text style={[styles.navBarText, styles.navBarButtonText]}>返回</Text>
            </TouchableOpacity>
        )
    },
    RightButton: function(route, navigator, index, navState) {
        return (
            <View />
        )
    },
    Title: function(route, navigator, index, navState) {
        if (!route.title) {
            return (
                <Text style={[styles.navBarText, styles.navBarTitleText]}>
                    我的WebApp
                </Text>
            )
        }
        return (
            <Text style={[styles.navBarText, styles.navBarTitleText]}>
                {route.title}
            </Text>
        )
    }
}

let RouteMapper = function(route, navigator) {
    switch (route.name) {
        case 'storyList':
            return <StoryList navigator={navigator} />
        case 'storyDetail':
            return <StoryDetail navigator={navigator} detailId={route.detailId} />
        case 'mainTabBar':
        default:
            return <MainTabBar navigator={navigator} />
    }
}

class ReactNativeRedux extends Component {
    render() {
        return (
            <Provider store={store}>
                <Navigator
                  style={styles.container}
                  initialRoute={{name: 'mainTabBar'}}
                  renderScene={RouteMapper}
                  navigationBar={
                    <Navigator.NavigationBar
                      routeMapper={NavigationBarRouteMapper}
                      style={styles.navBar}
                    />
                  }
                />
          </Provider>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    navBar: {
        backgroundColor: '#333',
        height: 54,
        top: -10,
    },
    navBarText: {
        fontSize: 16
    },
    navBarTitleText: {
        color: '#fff',
    },
    navBarLeftButton: {
        color: '#fff',
        paddingLeft: 10,
    },
});



AppRegistry.registerComponent('ReactNativeRedux', () => ReactNativeRedux);

//web
let app = document.createElement('div');
document.body.appendChild(app);
AppRegistry.runApplication('ReactNativeRedux', {
    rootTag: app
});