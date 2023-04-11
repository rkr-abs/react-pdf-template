import React from 'react';
import { StyleSheet, Text, View } from '@react-pdf/renderer';
import PageManager from '../services/PageManager';

const styles = StyleSheet.create({
	header: {
		height: '10vh',
		justifyContent: 'center',
		border: '1px solid black',
	},
	text: {
		textAlign: 'center',
	},
});

const Header = ({ children }) =>
	<View
		render={ (props) =>
			PageManager.isVisibility({ ...props, pageNo: 1 })
			&& <Text style={ styles.text }>{children}</Text> }
		fixed={ true }
	/>;

export default Header;
