import { React } from 'react';
import './App.scss';
import { PDFViewer, StyleSheet, Document } from '@react-pdf/renderer';
import PageComp from './components/PageComp';

const styles = StyleSheet.create({
	frame: {
		width: '90vw',
		height: '90vh',
	},
});

const App = () =>
	<div className="App">
		<PDFViewer style={ styles.frame }>
			<Document>
				<PageComp/>
			</Document>
		</PDFViewer>
	</div>
;

export default App;
