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
                    style={[styles.navItem, value == index ? styles.active : null]} 
                    onPress={() => onPress(index)} 
                    key={index}>
                    <Text style={[styles.text, value == index ? styles.red : null]}>
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
        backgroundColor:'#e7e7e7'
    },
    navItem:{
        flex:1,
        paddingTop:10,
    },
    text:{
        fontSize:16,
        textAlign:'center',
    },
    active:{
        backgroundColor:'#f7f7f7'
    },
    red:{
        color:'#F00',
    },

})
