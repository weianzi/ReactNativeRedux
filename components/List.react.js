import React, { 
    Component, PropTypes, StyleSheet, ListView, Text,
    View, TouchableHighlight,
} from 'react-native'
import ListItem from './ListItem.react'

export default class List extends Component {
    render() {
        const { dataSource } = this.props
        let data = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
        data.cloneWithRows(dataSource)
        return (
            <ListView
                dataSource={data}
                renderRow={this._renderRow}
                onEndReachedThreshold={10}
                automaticallyAdjustContentInsets={false}
                showsVerticalScrollIndicator={false} />
        )
    }

    _renderRow(rowData){
      return ( <ListItem rowData = {rowData} /> )
    }
}

List.propTypes = {
    dataSource: PropTypes.array.isRequired
}