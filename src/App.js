import { React } from 'react';
import {
	PDFViewer,
	StyleSheet,
	Document,
	Page,
	Text,
} from '@react-pdf/renderer';
import './App.scss';

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
				<Page size="A4">
					<Text>Ready to Start...</Text>
				</Page>
			</Document>
		</PDFViewer>
	</div>
;

export default App;
