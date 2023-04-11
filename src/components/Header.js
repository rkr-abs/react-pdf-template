import React from 'react';
import { View, StyleSheet, Text } from '@react-pdf/renderer';
import PageManager from '../services/PageManager';

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
	<View
		render={ (props) =>
			PageManager.isVisibility({ ...props, pageNo: 1 })
			&& <Text style={ styles.text }>Header</Text> }
	/>;

export default Header;
