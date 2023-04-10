import React from 'react';
import { StyleSheet, Text } from '@react-pdf/renderer';

const styles = StyleSheet.create({
	pageNumber: {
		position: 'absolute',
		fontSize: 12,
		bottom: 30,
		left: 0,
		right: 0,
		textAlign: 'center',
		color: 'grey',
	},
});

const PageNumber = () =>
	<Text
		style={ styles.pageNumber }
		render={ ({ pageNumber, totalPages }) =>
			`${ pageNumber } / ${ totalPages }` }
		fixed={ true }
	/>;

export default PageNumber;
