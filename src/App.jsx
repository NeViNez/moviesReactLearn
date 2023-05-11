import React from 'react';

import Header from './layout/Header';
import MainContent from './layout/MainContent';
import Footer from './layout/Footer';

function App() {
	return (
		<div className='flex flex-col min-h-screen'>
			<Header />
			<MainContent />
			<Footer />
		</div>
	);
}

export default App;
