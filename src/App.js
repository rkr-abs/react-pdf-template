import { React } from 'react';
import './App.scss';
import { Text } from '@react-pdf/renderer';
import PdfViewer from './components/PdfViewer';
import Page from './components/Page';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import PageNumber from './components/PageNumber';
import PageManager from './services/PageManager';
import WaterMark from './components/WaterMark';

const visible = {
	visibility: (data) => PageManager.isVisible(data),
};

const App = () =>
	<PdfViewer>
		<Page>
			<WaterMark/>
			<Header { ...{ ...visible, pages: [1] } }>
				<Text>Header</Text>
			</Header>
			<Body>
				<Text>Body1</Text>
			</Body>
			<Body>
				<Text>Body2</Text>
			</Body>
			<Footer { ...{ ...visible, pages: [1] } }>
				<Text>Footer</Text>
			</Footer>
			<PageNumber { ...{ style: { color: 'red' }} }/>
		</Page>
	</PdfViewer>;

export default App;
