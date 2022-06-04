import { Box, margin } from '@mui/system'
import React from 'react'
import Post from './Post'

const Feed = () => {
  return (
    <Box flex={4} margin={0}>
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