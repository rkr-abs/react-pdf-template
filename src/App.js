/* eslint-disable max-len */
/* eslint-disable max-lines-per-function */
import { React } from 'react';
import './App.scss';
import { PDFViewer, StyleSheet, Document } from '@react-pdf/renderer';
import Page from './components/Page';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import PageNumber from './components/PageNumber';

const styles = StyleSheet.create({
	frame: {
		width: '90vw',
		height: '90vh',
	},
});

const App = () =>
	<div className="App">
		<PDFViewer style={ styles.frame }>
			<Document>
				<Page>
					<Header>Header</Header>
					<Body>Mollit aliquip quis cupidatat fugiat Lorem sit. Elit dolore laborum culpa anim exercitation commodo non irure sunt adipisicing. Laboris do labore ea est et cupidatat eiusmod excepteur et. Commodo enim ex velit nulla cupidatat labore esse anim. Consequat consectetur in proident est adipisicing pariatur do.

						Ut velit nisi consequat duis sit sint dolor id aliquip ad excepteur exercitation. Pariatur in ex incididunt amet irure qui cupidatat. Nisi deserunt laboris tempor officia. Est nostrud aute sunt esse minim occaecat sit aliquip. Eiusmod occaecat tempor esse incididunt sint. Dolore laborum nostrud culpa ad irure.

						Aliqua occaecat eiusmod officia sint id et excepteur cupidatat ut. Deserunt pariatur velit nisi dolore mollit nisi veniam esse. Velit nulla duis elit amet aliquip tempor elit Lorem eiusmod nisi nostrud dolor consectetur. Qui quis proident enim mollit velit.

						Dolor sint pariatur elit ea culpa. Tempor mollit ea ea cillum est esse ad id. Aute culpa veniam enim consectetur. Reprehenderit ex ullamco labore eu laboris ipsum elit sit eu consequat eu anim aliquip. Proident irure eiusmod enim minim amet dolore eiusmod id dolore commodo minim. Id voluptate enim tempor officia duis consectetur qui nostrud pariatur proident Lorem laboris do. Culpa consectetur sunt labore ullamco veniam sint culpa qui.

						Incididunt labore fugiat deserunt fugiat id duis tempor ea ullamco laboris velit tempor consequat. Proident ex laboris irure ad elit cupidatat sit aliquip ipsum exercitation. Eu incididunt anim non anim.

						Pariatur et ea qui sit adipisicing commodo eiusmod do ex do excepteur elit qui esse. Lorem incididunt non ullamco incididunt cillum aute sunt veniam nulla. Deserunt qui dolor dolor ex sit fugiat et est deserunt. Adipisicing magna ullamco labore voluptate ut eu est fugiat commodo. Sint magna eu reprehenderit nisi et cillum amet non.

						Est culpa magna culpa magna tempor et ullamco ut. Minim in cupidatat eiusmod eiusmod ad nostrud. Fugiat pariatur duis anim qui nostrud in labore magna aliqua enim dolore. Do eiusmod Lorem consectetur mollit minim. Culpa velit ipsum nisi consequat dolor laborum proident in. Voluptate est commodo ex deserunt sint eu labore id nostrud adipisicing eiusmod. Exercitation reprehenderit laborum cupidatat amet.

						Eiusmod non occaecat officia anim commodo. Cupidatat sit ea mollit duis aliquip. Mollit amet mollit duis qui cupidatat labore deserunt adipisicing aliqua dolor do adipisicing irure deserunt. Velit eu tempor irure mollit officia minim consequat occaecat deserunt occaecat commodo. Et minim adipisicing qui incididunt reprehenderit ut mollit non.

						Aliquip incididunt culpa ad commodo velit quis esse id ipsum cupidatat veniam elit. Veniam dolor eu ut cillum voluptate do mollit veniam. Do occaecat velit pariatur fugiat pariatur exercitation et officia. Excepteur ex cupidatat aute minim reprehenderit quis. Ea ut non magna anim reprehenderit consectetur labore.

						Labore amet ullamco consequat ipsum est irure nulla quis occaecat voluptate aliquip irure exercitation. Cupidatat commodo magna minim qui. Consequat anim ea ea fugiat nisi deserunt consequat. Aute cupidatat occaecat pariatur eiusmod est magna minim aute aliquip laborum voluptate ea nostrud. Veniam officia excepteur aute laboris id deserunt ex laboris ut ullamco nulla sint cupidatat.</Body>
					<Body>Mollit aliquip quis cupidatat fugiat Lorem sit. Elit dolore laborum culpa anim exercitation commodo non irure sunt adipisicing. Laboris do labore ea est et cupidatat eiusmod excepteur et. Commodo enim ex velit nulla cupidatat labore esse anim. Consequat consectetur in proident est adipisicing pariatur do.

						Ut velit nisi consequat duis sit sint dolor id aliquip ad excepteur exercitation. Pariatur in ex incididunt amet irure qui cupidatat. Nisi deserunt laboris tempor officia. Est nostrud aute sunt esse minim occaecat sit aliquip. Eiusmod occaecat tempor esse incididunt sint. Dolore laborum nostrud culpa ad irure.

						Aliqua occaecat eiusmod officia sint id et excepteur cupidatat ut. Deserunt pariatur velit nisi dolore mollit nisi veniam esse. Velit nulla duis elit amet aliquip tempor elit Lorem eiusmod nisi nostrud dolor consectetur. Qui quis proident enim mollit velit.

						Dolor sint pariatur elit ea culpa. Tempor mollit ea ea cillum est esse ad id. Aute culpa veniam enim consectetur. Reprehenderit ex ullamco labore eu laboris ipsum elit sit eu consequat eu anim aliquip. Proident irure eiusmod enim minim amet dolore eiusmod id dolore commodo minim. Id voluptate enim tempor officia duis consectetur qui nostrud pariatur proident Lorem laboris do. Culpa consectetur sunt labore ullamco veniam sint culpa qui.

						Incididunt labore fugiat deserunt fugiat id duis tempor ea ullamco laboris velit tempor consequat. Proident ex laboris irure ad elit cupidatat sit aliquip ipsum exercitation. Eu incididunt anim non anim.

						Pariatur et ea qui sit adipisicing commodo eiusmod do ex do excepteur elit qui esse. Lorem incididunt non ullamco incididunt cillum aute sunt veniam nulla. Deserunt qui dolor dolor ex sit fugiat et est deserunt. Adipisicing magna ullamco labore voluptate ut eu est fugiat commodo. Sint magna eu reprehenderit nisi et cillum amet non.

						Est culpa magna culpa magna tempor et ullamco ut. Minim in cupidatat eiusmod eiusmod ad nostrud. Fugiat pariatur duis anim qui nostrud in labore magna aliqua enim dolore. Do eiusmod Lorem consectetur mollit minim. Culpa velit ipsum nisi consequat dolor laborum proident in. Voluptate est commodo ex deserunt sint eu labore id nostrud adipisicing eiusmod. Exercitation reprehenderit laborum cupidatat amet.

						Eiusmod non occaecat officia anim commodo. Cupidatat sit ea mollit duis aliquip. Mollit amet mollit duis qui cupidatat labore deserunt adipisicing aliqua dolor do adipisicing irure deserunt. Velit eu tempor irure mollit officia minim consequat occaecat deserunt occaecat commodo. Et minim adipisicing qui incididunt reprehenderit ut mollit non.

						Aliquip incididunt culpa ad commodo velit quis esse id ipsum cupidatat veniam elit. Veniam dolor eu ut cillum voluptate do mollit veniam. Do occaecat velit pariatur fugiat pariatur exercitation et officia. Excepteur ex cupidatat aute minim reprehenderit quis. Ea ut non magna anim reprehenderit consectetur labore.

						Labore amet ullamco consequat ipsum est irure nulla quis occaecat voluptate aliquip irure exercitation. Cupidatat commodo magna minim qui. Consequat anim ea ea fugiat nisi deserunt consequat. Aute cupidatat occaecat pariatur eiusmod est magna minim aute aliquip laborum voluptate ea nostrud. Veniam officia excepteur aute laboris id deserunt ex laboris ut ullamco nulla sint cupidatat.</Body>
					<Body>Mollit aliquip quis cupidatat fugiat Lorem sit. Elit dolore laborum culpa anim exercitation commodo non irure sunt adipisicing. Laboris do labore ea est et cupidatat eiusmod excepteur et. Commodo enim ex velit nulla cupidatat labore esse anim. Consequat consectetur in proident est adipisicing pariatur do.

						Ut velit nisi consequat duis sit sint dolor id aliquip ad excepteur exercitation. Pariatur in ex incididunt amet irure qui cupidatat. Nisi deserunt laboris tempor officia. Est nostrud aute sunt esse minim occaecat sit aliquip. Eiusmod occaecat tempor esse incididunt sint. Dolore laborum nostrud culpa ad irure.

						Aliqua occaecat eiusmod officia sint id et excepteur cupidatat ut. Deserunt pariatur velit nisi dolore mollit nisi veniam esse. Velit nulla duis elit amet aliquip tempor elit Lorem eiusmod nisi nostrud dolor consectetur. Qui quis proident enim mollit velit.

						Dolor sint pariatur elit ea culpa. Tempor mollit ea ea cillum est esse ad id. Aute culpa veniam enim consectetur. Reprehenderit ex ullamco labore eu laboris ipsum elit sit eu consequat eu anim aliquip. Proident irure eiusmod enim minim amet dolore eiusmod id dolore commodo minim. Id voluptate enim tempor officia duis consectetur qui nostrud pariatur proident Lorem laboris do. Culpa consectetur sunt labore ullamco veniam sint culpa qui.

						Incididunt labore fugiat deserunt fugiat id duis tempor ea ullamco laboris velit tempor consequat. Proident ex laboris irure ad elit cupidatat sit aliquip ipsum exercitation. Eu incididunt anim non anim.

						Pariatur et ea qui sit adipisicing commodo eiusmod do ex do excepteur elit qui esse. Lorem incididunt non ullamco incididunt cillum aute sunt veniam nulla. Deserunt qui dolor dolor ex sit fugiat et est deserunt. Adipisicing magna ullamco labore voluptate ut eu est fugiat commodo. Sint magna eu reprehenderit nisi et cillum amet non.

						Est culpa magna culpa magna tempor et ullamco ut. Minim in cupidatat eiusmod eiusmod ad nostrud. Fugiat pariatur duis anim qui nostrud in labore magna aliqua enim dolore. Do eiusmod Lorem consectetur mollit minim. Culpa velit ipsum nisi consequat dolor laborum proident in. Voluptate est commodo ex deserunt sint eu labore id nostrud adipisicing eiusmod. Exercitation reprehenderit laborum cupidatat amet.

						Eiusmod non occaecat officia anim commodo. Cupidatat sit ea mollit duis aliquip. Mollit amet mollit duis qui cupidatat labore deserunt adipisicing aliqua dolor do adipisicing irure deserunt. Velit eu tempor irure mollit officia minim consequat occaecat deserunt occaecat commodo. Et minim adipisicing qui incididunt reprehenderit ut mollit non.

						Aliquip incididunt culpa ad commodo velit quis esse id ipsum cupidatat veniam elit. Veniam dolor eu ut cillum voluptate do mollit veniam. Do occaecat velit pariatur fugiat pariatur exercitation et officia. Excepteur ex cupidatat aute minim reprehenderit quis. Ea ut non magna anim reprehenderit consectetur labore.

						Labore amet ullamco consequat ipsum est irure nulla quis occaecat voluptate aliquip irure exercitation. Cupidatat commodo magna minim qui. Consequat anim ea ea fugiat nisi deserunt consequat. Aute cupidatat occaecat pariatur eiusmod est magna minim aute aliquip laborum voluptate ea nostrud. Veniam officia excepteur aute laboris id deserunt ex laboris ut ullamco nulla sint cupidatat.</Body>
					<Footer>Footer</Footer>
					<PageNumber/>
				</Page>
			</Document>
		</PDFViewer>
	</div>
;

export default App;
