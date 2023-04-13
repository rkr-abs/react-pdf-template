import { React } from 'react';
import './App.scss';
import { Text, Image } from '@react-pdf/renderer';
import PdfViewer from './components/PdfViewer';
import Page from './components/Page';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import PageNumber from './components/PageNumber';
import PageManager from './services/PageManager';
import Watermark from './components/Watermark';

const visible = {
	visibility: (data) => PageManager.isVisible({ ...data, hideOnPage: 1 }),
};

const App = () =>
	<PdfViewer>
		<Page>
			<Watermark>
				<Image
					{ ...{
						style: { objectFit: 'cover', height: '100vh' },
						src: `${ process.env.PUBLIC_URL }/images/ironMan.jpg`,
						alt: 'ironMan',
					} }
				/>
			</Watermark>
			<Header { ...visible }> <Text>Header</Text> </Header>
			<Body> <Text>Body</Text> </Body>
			<Footer { ...visible }> <Text>Footer</Text> </Footer>
			<PageNumber { ...{ style: { color: 'red' }} }/>
		</Page>
	</PdfViewer>;

export default App;
