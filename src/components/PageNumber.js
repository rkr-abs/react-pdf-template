import React from 'react';
import { Text } from '@react-pdf/renderer';
import PageManager from '../services/PageManager';

const pageNumber = {
	position: 'absolute',
	fontSize: 12,
	bottom: 30,
	left: 0,
	right: 0,
	textAlign: 'center',
	color: 'grey',
};

const PageNumber = (context) => {
	const { style } = context;

	return (
		<Text { ...{
			style: [pageNumber, style],
			render: (props) => PageManager
				.getPageNumber({ ...context, data: props }),
		} }
		/>
	);
};

export default PageNumber;
