import React from 'react';
import { View, StyleSheet, Text } from '@react-pdf/renderer';

const styles = StyleSheet.create({
	body: {
		border: '1px solid black',
		marginTop: 'auto',
		justifyContent: 'center',
		flexGrow: 1,
	},
	text: {
		textAlign: 'center',
	},
});

const Body = () =>
	<View style={ styles.body }>
		<Text style={ styles.text }>Body</Text>
	</View>;

export default Body;
