import React from 'react';
import './App.scss';
import Sidebar from './Components/Sidebar';
import Feed from './Components/Feed';
import Rightbar from './Components/Rightbar';

function App() {
	return (
		<div>
			<Sidebar />
			<Feed />
			<Rightbar />
		</div>
	);
}

export default App;
