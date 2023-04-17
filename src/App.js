import { React } from 'react';
import './App.scss';
import PdfViewer from './components/PdfViewer';
import Page from './components/Page';
import Body from './components/Body';
import Footer from './components/Footer';
import PageNumber from './components/PageNumber';
import Watermark from './components/Watermark';
import PageManager from './services/PageManager';
import { Image, Text } from '@react-pdf/renderer';
import { Header } from 'sample_react_library';

const visible = {
	visibility: (data) => PageManager.isVisible({ ...data, hideOnPage: 2 }),
};

const App = () =>
	<PdfViewer>
		<Page>
			<Watermark>
				<Image { ...{
					style: { objectFit: 'cover', height: '100vh' },
					src: `${ process.env.PUBLIC_URL }/images/ironMan.jpg`,
				} }
				/>
			</Watermark>
			<Header><Text>Header</Text></Header>
			<Body { ...{ style: { backgroundColor: 'rgba(255,0,0,0.4)' }} }>
				<Text>Body</Text>
			</Body>
			<Footer { ...{ ...visible } }><Text> FOoter </Text>
			</Footer>
			<PageNumber { ...{ style: { color: 'red' }} }/>
		</Page>
	</PdfViewer>;

export default App;
