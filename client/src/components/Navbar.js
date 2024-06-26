import React from 'react'
import {Box,Link,Typography,useTheme} from "@mui/material";

function Navbar() {
    const theme = useTheme();
  return (
  <Box width='100%' p="1rem 6%" backgroundColor={theme.palette.background.alt} textAlign="center" sx={{boxShadow:3,mb:2}}>
<Typography variant='h1' color='primary' fontWeight={'bold'}>SaaSAI </Typography>
<Link href="/register" p={1}>Register</Link>
<Link href="/login" p={1}>Login</Link>
  </Box>
  )
}

export default Navbar