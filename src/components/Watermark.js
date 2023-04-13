import React from 'react';
import { StyleSheet, View } from '@react-pdf/renderer';

const styles = StyleSheet.create({
	watermark: {
		height: '100%',
		opacity: '0.8',
		position: 'absolute',
		zIndex: -1,
	},
});

const Watermark = ({ children, style }) =>
	<View { ...{ style: [styles.watermark, style], fixed: true } }>
		{children}
	</View>;

export default Watermark;
