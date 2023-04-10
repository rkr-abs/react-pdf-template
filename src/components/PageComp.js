import React from 'react';
import { Page, StyleSheet } from '@react-pdf/renderer';
import Footer from './Footer';
import Header from './Header';
import Body from './Body';
import PageNumber from './PageNumber';

const styles = StyleSheet.create({
	page: { paddingTop: 35, paddingBottom: 65, paddingHorizontal: 35 },
});

const PageComp = () =>
	<Page size="A4" style={ styles.page }>
		<Header/>
		<Body/>
		<Footer/>
		<PageNumber/>
	</Page>

;

export default PageComp;
