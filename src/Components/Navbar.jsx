import React from 'react'
import { AppBar, Toolbar, styled, Typography, InputBase, Badge, Avatar } from '@mui/material'
import { Block, Mail, Notifications, Pets } from '@mui/icons-material'
import { Box } from '@mui/system'

const StyledToolbar = styled(Toolbar)({
  display:"flex",
  justifyContent:"space-between"
})

const Search = styled("div")(({theme})=>({
  backgroundColor:"white",
  padding:"0 10px",
  borderRadius: theme.shape.borderRadius,
  width:"40%"
}))
const Icons = styled(Box)(({theme})=>({
  display:"none",
  alignItems:"center",
  gap:"20px",
  [theme.breakpoints.up("sm")]:{
    display:"flex"
  }
}))
const UserBox = styled(Box)(({theme})=>({
  display:"flex",
  alignItems:"center",
  gap:"10px",
  [theme.breakpoints.up("sm")]:{
    display:"none"
  }
}))

const Navbar = () => {
  return (
    <AppBar position='sticky'>
      <StyledToolbar>
        <Typography variant='h6' sx={{display: {xs:'none', sm:'block'}}}>
          Farrukh dev
        </Typography>
        <Pets sx={{display: {xs:'block', sm:'none'}}}/>
        <Search>
          <InputBase placeholder='Search...'/>
        </Search>
        <Icons>
        <Badge badgeContent={4} color="error">
        <Mail/>
        </Badge>
        <Badge badgeContent={4} color="error">
        <Notifications/>
        </Badge>
        <Avatar sx={{width:30, height:30}} src='https://images.vexels.com/media/users/3/129616/isolated/preview/fb517f8913bd99cd48ef00facb4a67c0-businessman-avatar-silhouette-by-vexels.png'/>
        </Icons>
        <UserBox>
        <Avatar sx={{width:30, height:30}} src='https://images.vexels.com/media/users/3/129616/isolated/preview/fb517f8913bd99cd48ef00facb4a67c0-businessman-avatar-silhouette-by-vexels.png'/>
        <Typography variant='span'>Farrukh</Typography>
        </UserBox>
      </StyledToolbar>
    </AppBar>
  )
}

export default Navbar