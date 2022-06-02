import React from 'react';
import './App.scss';
import Sidebar from './Components/Sidebar';
import Feed from './Components/Feed';
import Rightbar from './Components/Rightbar';
import { Box, Container, Stack } from '@mui/material';

function App() {
	return (
		<Box>
			{/* navbar */}
			<Stack direction={'row'} spacing={2} justifyContent="space-between">
				<Sidebar />
				<Feed />
				<Rightbar />
			</Stack>
		</Box>
	);
}

export default App;
