import React from 'react';
import { StyleSheet, View } from '@react-pdf/renderer';

const styles = StyleSheet.create({
	body: {
		flex: 1,
		height: '80vh',
	},
});

const Body = ({ children, style }) =>
	<View { ...{ style: [styles.body, style], wrap: false } }>
		{children}
	</View>;

export default Body;
