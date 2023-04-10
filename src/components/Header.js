import React from 'react';
import { View, StyleSheet, Text } from '@react-pdf/renderer';

const styles = StyleSheet.create({
	header: {
		border: '1px solid black',
		height: '10vh',
		justifyContent: 'center',
	},
	text: {
		textAlign: 'center',
	},
});

const Header = () =>
	<View style={ styles.header }>
		<Text style={ styles.text }>Header</Text>
	</View>;

export default Header;
