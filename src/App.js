import React from 'react';
import './App.scss';
import { Button, Typography } from '@mui/material';
import { Add, Settings, } from '@mui/icons-material';
import { margin } from '@mui/system';

function App() {
	return (
		<div>
			<Button size='small' variant='text'>
				Text
			</Button>
			<Button
				startIcon={<Settings />}
				variant='contained'
				color='secondary'
				size='small'>
				Settings
			</Button>
			<Button
				startIcon={<Add />}
				variant='contained'
				color='success'
				size='small'>
				Add new post
			</Button>
			<Typography variant='h1' component='h2'>
				it uses h1 style  but it's a p tag
			</Typography>
      <Button variant='contained'
      sx={{
        backgroundColor:"skyblue",
        color:"#888",
        margin:5,
        "&:hover":{
          backgroundColor:"lightblue"
        },
        "&:disabled":{
          backgroundColor:"gray",
          color:"white"
        }
      }}
      >My Unique Button</Button>
      <Button variant='contained' 
      sx={{
        backgroundColor:"skyblue",
        color:"#888",
        margin:5,
        "&:hover":{
          backgroundColor:"lightblue"
        },
        "&:disabled":{
          backgroundColor:"gray",
          color:"white"
        }
      }}
      >My Unique Button</Button>
      <Button variant='contained'
      sx={{
        backgroundColor:"skyblue",
        color:"#888",
        margin:5,
        "&:hover":{
          backgroundColor:"lightblue"
        },
        "&:disabled":{
          backgroundColor:"gray",
          color:"white"
        }
      }}
      >My Unique Button</Button>
		</div>
	);
}

export default App;
