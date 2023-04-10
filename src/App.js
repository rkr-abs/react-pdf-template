import { PDFViewer, StyleSheet } from '@react-pdf/renderer';
import { React } from 'react';
import './App.scss';

const styles = StyleSheet.create({
	frame: {
		width: '90vw',
		height: '90vh',
	},
});

const App = () =>
	<div className="App">
		<PDFViewer style={ styles.frame }/>
	</div>;

export default App;
