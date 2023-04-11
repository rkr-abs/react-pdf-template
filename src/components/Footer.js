import React from 'react';
import { View } from '@react-pdf/renderer';

const Footer = ({ children, visibility }) =>
	<View
		render={ (props) => visibility(props) && children }
		fixed={ true }
	/>;

export default Footer;
