import React from 'react';
import { StyleSheet, View } from '@react-pdf/renderer';

const styles = StyleSheet.create({
	body: {
		flexGrow: 1,
	},
});

const Body = ({ children, style }) =>
	<View { ...{ style: { ...styles.body, ...style }} }>
		{children}
	</View>;

export default Body;
