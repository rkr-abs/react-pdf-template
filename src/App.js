/* eslint-disable max-len */
/* eslint-disable no-magic-numbers */
/* eslint-disable max-lines-per-function */
import { React } from 'react';
import './App.scss';
import { Image, Text } from '@react-pdf/renderer';
import PdfViewer from './components/PdfViewer';
import Page from './components/Page';
import Body from './components/Body';
import Footer from './components/Footer';
import PageNumber from './components/PageNumber';
import Watermark from './components/Watermark';
import PageManager from './services/PageManager';
import { range } from '@laufire/utils/collection';
import { Header } from 'sample_react_library';

const visible = {
	visibility: (data) => PageManager.isVisible({ ...data, hideOnPage: 2 }),
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
			<Header><Text>Header</Text></Header>
			<Body { ...{ style: {
				backgroundColor: 'rgba(255,0,0,0.4)',
			}} }
			>
				{range(0, 100).map((num, i) =>
					<Text key={ i }>{num} - Body</Text>)}
			</Body>
			<Footer
				{ ...{
					...visible,
					style: {
						backgroundColor: 'rgba(0,255,0,0.4)',
					},
				} }
			>
				<Text>
					FOoter
				</Text>
			</Footer>
			<PageNumber { ...{ style: { color: 'red' }} }/>
		</Page>
	</PdfViewer>
;

export default App;
