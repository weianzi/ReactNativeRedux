import React, { 
    Component, PropTypes, StyleSheet, ListView, Text,
    View, TouchableHighlight,
} from 'react-native'
import ListItem from './ListItem.react'

export default class List extends Component {
    /*getInitialState(){
        return {
            data: new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
        }
    }*/
    render() {
        return (
            <View>
                {this._renderRow()}
            </View>
        )
    }

    _renderRow(){
        const { posts } = this.props
        return posts.map((item, index) => (<ListItem rowData = {item} key={index}/>) )
    }
}

List.propTypes = {
    posts: PropTypes.array.isRequired
}