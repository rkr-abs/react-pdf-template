import React from 'react';
import { Text, View } from '@react-pdf/renderer';
import { Header } from 'sample_react_library';

const Letterhead = ({ children, title, address, phoneNo, email, cin }) =>
	<>
		<Header { ...{ style: { border: '1px solid black' }} }>
			<View>
				<Text>{title}</Text>
			</View>
			<View { ...{ style: { flexDirection: 'row' }} }>
				<Text>{address} <Text>{cin} </Text> </Text>
				<Text>{email} <Text>{phoneNo} </Text> </Text>
			</View>
		</Header>
		{children}
	</>;

export default Letterhead;
