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
					<ProgressBarAndroid  />
				</View>
			)
		}
		return (
			<View style={styles.container}>
				<ActivityIndicatorIOS  />
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
})