import React from 'react';
import { View } from '@react-pdf/renderer';

const defaultVisibility = () => true;

const Header = ({ children, visibility = defaultVisibility }) =>
	<View { ...{
		fixed: true,
		render: (props) => visibility(props) && children,
	} }
	/>;

export default Header;
