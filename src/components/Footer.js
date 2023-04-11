import React from 'react';
import { View, StyleSheet, Text } from '@react-pdf/renderer';
import PageManager from '../services/PageManager';

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

const Footer = ({ children }) =>
	<View
		render={ (props) =>
			PageManager.isVisibility({ ...props, pageNo: 3 })
	&& <Text style={ styles.text }>{children}</Text> }
		fixed={ true }
	/>;

export default Footer;
