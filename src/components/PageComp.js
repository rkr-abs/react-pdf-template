import React from 'react';
import { Page, StyleSheet } from '@react-pdf/renderer';
import PageNumber from './PageNumber';

const styles = StyleSheet.create({
	page: { paddingTop: 35, paddingBottom: 65, paddingHorizontal: 35 },
});

const PageComp = ({ children, style }) =>
	<Page size="A4" style={ [styles.page, style] }>
		{children}
		<PageNumber/>
	</Page>

;

export default PageComp;
