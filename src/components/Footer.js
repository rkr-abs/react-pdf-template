import React from 'react';
import { View, StyleSheet, Text } from '@react-pdf/renderer';
import PageManager from '../services/PageManager';

const styles = StyleSheet.create({
	footer: {
		border: '1px solid black',
		height: '10vh',
		justifyContent: 'center',
		marginTop: 'auto',
	},
	text: {
		textAlign: 'center',
	},
});

const Footer = () =>
	<View
		render={ (props) =>
			PageManager.isVisibility({ ...props, pageNo: 3 })
	&& <Text style={ styles.text }>Footer</Text> }
	/>;

export default Footer;
