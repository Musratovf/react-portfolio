import React from 'react';
import './App.scss';
import Sidebar from './Components/Sidebar';
import Feed from './Components/Feed';
import Rightbar from './Components/Rightbar';
import { Box, Stack } from '@mui/material';
import Navbar from './Components/Navbar';
import Add from './Components/Add';
import { createTheme } from '@mui/system';
import { ThemeProvider } from 'styled-components';
import { useState } from 'react';

function App() {

	const [mode, setMode] = useState("light");

	const darkTheme = createTheme ({
		palette:{
			mode: mode,
		},
	})
	
	return (
	<ThemeProvider theme={darkTheme}>
		<Box >
			<Navbar />
			<Stack direction={'row'} spacing={2} justifyContent="space-between">
				<Sidebar setMode={setMode} mode={mode} />
				<Feed />
				<Rightbar />
			</Stack>
			<Add/>
		</Box>
	</ThemeProvider>
	);
}

export default App;
