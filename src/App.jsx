import './App.scss';
import React from 'react';
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';
import Footer from './Components/Footer/Footer';
import content from './Localization/Content.js';

function App() {
	const [lang, setLang] = React.useState('uz');

	return (
		<>
			<div className='container'>
				<Header lang={lang} setLang={setLang} content={content} />
				<Main lang={lang} content={content} />
				<Footer lang={lang} content={content} />
			</div>
		</>
	);
}

export default App;
