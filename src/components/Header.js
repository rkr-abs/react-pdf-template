import React from 'react';
import { StyleSheet, Text, View } from '@react-pdf/renderer';

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

const Header = ({ children, visibility }) =>
	<View
		render={ (props) =>
			visibility({ ...props, pageNo: 1 })
			&& <Text style={ styles.text }>{children}</Text> }
		fixed={ true }
	/>;

export default Header;
