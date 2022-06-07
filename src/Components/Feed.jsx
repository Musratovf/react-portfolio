import { Box } from '@mui/system'
import React from 'react'
import Post from './Post'
import "./main.css"
const Feed = () => {
  return (
    <Box className='boxes' p={1} flex={4}>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
    </Box>
  )
}

export default Feed