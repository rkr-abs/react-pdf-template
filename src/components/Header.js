import React from 'react';
import { View } from '@react-pdf/renderer';

const defaultVisibility = () => true;

const Header = ({ children, visibility = defaultVisibility, pages, style }) =>
	<View { ...{
		style: style,
		fixed: true,
		render: (props) => visibility({ ...props, pages }) && children,
	} }
	/>;

export default Header;
