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

const Footer = ({ children, visibility }) =>
	<View
		render={ (props) =>
			visibility({ ...props, pageNo: 3 })
			&& <Text style={ styles.text }>{children}</Text> }
		fixed={ true }
	/>;

export default Footer;
