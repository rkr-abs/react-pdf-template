import React from 'react';
import { View, StyleSheet, Text } from '@react-pdf/renderer';

const styles = StyleSheet.create({
	footer: {
		border: '1px solid black',
		height: '10vh',
		justifyContent: 'center',
	},
	text: {
		textAlign: 'center',
	},
});

const Footer = () =>
	<View style={ styles.footer }>
		<Text style={ styles.text }>Footer</Text>
	</View>;

export default Footer;
