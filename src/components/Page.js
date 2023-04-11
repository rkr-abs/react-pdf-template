import React from 'react';
import { Page as PdfPage, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
	page: { paddingTop: 35, paddingBottom: 65, paddingHorizontal: 35 },
});

const Page = ({ children, style }) =>
	<PdfPage size="A4" style={ [styles.page, style] }>
		{children}
	</PdfPage>;

export default Page;
