import React from 'react';
import Letterhead from './Letterhead';
import Body from './Body';
import Footer from './Footer';
import { Text } from '@react-pdf/renderer';

const Letter = () =>
	<>
		<Letterhead { ...{
			address: [],
			title: 'Abstract Business Systems Pvt. Ltd.',
			email: 'contact@gmail.com',
			cin: 'csdlk',
			phoneNo: 90909090,
		} }
		>
			<Body><Text>Body</Text> </Body>
		</Letterhead>
		<Footer>
			<Text>
				Payments shall be made within 15
				calendar days from the date of invoice.
			</Text>
		</Footer>
	</>;

export default Letter;
