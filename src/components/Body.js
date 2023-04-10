import React from 'react';
import { View, StyleSheet, Text } from '@react-pdf/renderer';

const styles = StyleSheet.create({
	body: {
		border: '1px solid black',
		height: '68vh',
		flex: 1,
	},
	text: {
		padding: 30,
	},
});

const Body = () =>
	<View style={ styles.body }>
		<Text style={ styles.text }>Body</Text>
	</View>;

export default Body;
