import React from 'react';
import { View } from '@react-pdf/renderer';

const watermark = {
	height: '100%',
	opacity: '0.8',
	position: 'absolute',
	zIndex: -1,
};

const Watermark = ({ children, style }) =>
	<View { ...{ style: [watermark, style], fixed: true } }>
		{children}
	</View>;

export default Watermark;
