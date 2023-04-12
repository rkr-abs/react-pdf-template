import React from 'react';
import { View } from '@react-pdf/renderer';

const defaultVisibility = () => true;

const Footer = ({ children, visibility = defaultVisibility, pages, style }) =>
	<View { ...{
		style: style,
		fixed: true,
		render: (props) => visibility({ ...props, pages }) && children,
	} }
	/>;

export default Footer;
