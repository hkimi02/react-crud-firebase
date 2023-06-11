import { AppBar, Toolbar, Typography } from '@mui/material'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Link to="/about">About</Link>
        </Typography>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar
