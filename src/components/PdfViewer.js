import React from 'react';
import { PDFViewer, Document } from '@react-pdf/renderer';

const frame = {
	width: '90vw',
	height: '90vh',
};

const PdfViewer = ({ children }) =>
	<PDFViewer style={ frame }>
		<Document>{children}</Document>
	</PDFViewer>;

export default PdfViewer;
