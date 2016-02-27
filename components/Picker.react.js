import React, { 
    Component, View, TouchableHighlight, Text, StyleSheet, PropTypes 
} from 'react-native'

export default class Picker extends Component {
  render() {
    const { value, onPress, options } = this.props
    return (
        <View style={styles.navBoxView}>
            {options.map((item, index) =>
                <TouchableHighlight 
                    style={styles.navItem} 
                    onPress={() => onPress(index)} 
                    key={index}>
                    <Text style={[styles.text, value == index ? styles.active : null]}>
                        {item}
                    </Text>
                </TouchableHighlight>)
            }
        </View>
    )
  }
}

Picker.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.string.isRequired
  ).isRequired,
  value: PropTypes.number.isRequired,
  onPress: PropTypes.func.isRequired
}

const styles = StyleSheet.create({
    navBoxView:{
        flex:1,
        flexDirection:'row',
        marginBottom:10,
        backgroundColor:'#f7f7f7'
    },
    navItem:{
        flex:1,
    },
    text:{
        paddingTop:10,
        paddingBottom:10,
        fontSize:16,
        textAlign:'center'
    },
    active:{
        color:'#F00',
        backgroundColor:'#e7e7e7'
    },

})
