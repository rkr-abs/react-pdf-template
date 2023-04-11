/* eslint-disable max-len */
/* eslint-disable max-lines-per-function */
import { React } from 'react';
import './App.scss';
import { PDFViewer, StyleSheet, Document } from '@react-pdf/renderer';
import Page from './components/Page';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import PageNumber from './components/PageNumber';
import PageManager from './services/PageManager';

const styles = StyleSheet.create({
	frame: {
		width: '90vw',
		height: '90vh',
	},
});
const visibility = (data) => PageManager.isVisibility(data);

const App = () =>
	<div className="App">
		<PDFViewer style={ styles.frame }>
			<Document>
				<Page>
					<Header { ...{ visibility } }>Header</Header>
					<Body>Body1</Body>
					<Body>Body2</Body>
					<Body>Body3</Body>
					<Footer { ...{ visibility } }>Footer</Footer>
					<PageNumber/>
				</Page>
			</Document>
		</PDFViewer>
	</div>
;

export default App;
