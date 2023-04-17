import React from 'react';
import { View } from '@react-pdf/renderer';

const body = {
	flexGrow: 1,
};

const Body = ({ children, style }) =>
	<View { ...{ style: [body, style] } }>
		{children}
	</View>;

export default Body;
