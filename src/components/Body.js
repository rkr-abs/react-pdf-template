import React from 'react';
import { StyleSheet, View } from '@react-pdf/renderer';

const styles = StyleSheet.create({
	body: {
		flex: 1,
	},
});

const Body = ({ children, style }) =>
	<View { ...{ style: { ...styles, style }} }>
		{children}
	</View>;

export default Body;
