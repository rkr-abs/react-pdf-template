import React from 'react';
import { View } from '@react-pdf/renderer';

const Header = ({ children, visibility }) =>
	<View
		render={ (props) =>
			visibility(props) && children }
		fixed={ true }
	/>;

export default Header;
