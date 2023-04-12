import React from 'react';
import { Page as PdfPage } from '@react-pdf/renderer';

const Page = ({ children, style }) =>
	<PdfPage { ...{ size: 'A4', style: style } }>
		{children}
	</PdfPage>;

export default Page;
