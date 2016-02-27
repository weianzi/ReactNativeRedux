import React, { 
    Component, PropTypes, StyleSheet, Text, View,
    Platform,
    ActivityIndicatorIOS,
    ProgressBarAndroid,
} from 'react-native'

export default class LoadingView extends Component {
	render() {
		if(Platform.OS === 'android'){
			return (
				<View style={styles.container}>
					<ProgressBarAndroid 
						styleAttr="Large" 
						style={styles.spinner} />
				</View>
			)
		}
		return (
			<View style={styles.container}>
				<ActivityIndicatorIOS 
					style={styles.spinner} />
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container:{
		flex:1,
		alignItems:'center',
		justifyContent:'center',	
	},
	spinner: {
	  width: 60,
	  height: 60,
	},
})