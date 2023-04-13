import React from 'react';
import { Image, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
	image: {
		objectFit: 'cover',
		height: '100vh',
		opacity: '0.8',
		position: 'absolute',
		zIndex: -1,
		top: 0,
	},
});

const WaterMark = ({ style }) =>
	<Image
		fixed={ true }
		style={ [styles.image, style] }
		src={ `${ process.env.PUBLIC_URL }/images/ironMan.jpg` }
		alt="images"
	/>;

export default WaterMark;
