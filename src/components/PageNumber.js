import React from 'react';
import { StyleSheet, Text } from '@react-pdf/renderer';
import PageManager from '../services/PageManager';

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

const PageNumber = (context) => {
	const { style } = context;

	return (
		<Text { ...{
			style: [styles.pageNumber, style],
			render: (props) => PageManager
				.getPageNumber({ ...context, data: props }),
		} }
		/>
	);
};

export default PageNumber;
