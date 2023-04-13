import React from 'react';
import { View } from '@react-pdf/renderer';

const defaultVisibility = () => true;

const Footer = ({ children, visibility = defaultVisibility, style }) =>
	<View { ...{
		style: style,
		fixed: true,
		render: (props) => visibility(props) && children,
	} }
	/>;

export default Footer;
