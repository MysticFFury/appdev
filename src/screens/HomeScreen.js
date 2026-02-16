import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Homescreens = () => {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>welcome hmome</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#ffffff',
		padding: 16,
	},
	title: {
		fontSize: 36,
		fontWeight: '700',
		color: '#111111',
	},
});

export default Homescreens;
