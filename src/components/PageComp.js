import React from 'react';
import { Page, StyleSheet } from '@react-pdf/renderer';
import Header from './Header';

const styles = StyleSheet.create({
	page: { paddingTop: 35, paddingBottom: 65, paddingHorizontal: 35 },
});

const PageComp = () =>
	<Page size="A4" style={ styles.page }>
		<Header/>
	</Page>
;

export default PageComp;
