import React from 'react';
import { StyleSheet, Text, View } from '@react-pdf/renderer';

const styles = StyleSheet.create({
	body: {
		border: '1px solid black',
		flex: 1,
	},
	text: {
		padding: 30,
		height: '80vh',
	},
});

const Body = ({ children }) =>
	<View style={ styles.body } wrap={ false }>
		<Text style={ styles.text }>{children}</Text>
	</View>;

export default Body;
