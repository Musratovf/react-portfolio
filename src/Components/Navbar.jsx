import React from 'react'
import { AppBar, Toolbar, styled, Typography } from '@mui/material'

const StyledToolbar = styled(Toolbar)({
  display:"flex",
  justifyContent:"space-between"
})

const Navbar = () => {
  return (
    <AppBar position='sticky'>
      <StyledToolbar>
        <Typography variant='h6'>
          Farrukh dev
        </Typography>
      </StyledToolbar>
    </AppBar>
  )
}

export default Navbar