import { AppBar, Toolbar, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import HomeIcon from '@mui/icons-material/Home'
import InfoIcon from '@mui/icons-material/Info'
import '../style/navbar.css'
import AddIcon from '@mui/icons-material/Add'
function Navbar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1 }}
          className="typo"
        >
          <Link to="/" className="link">
            <HomeIcon />
          </Link>
          <Link to="/about" className="link">
            <AddIcon />
          </Link>
        </Typography>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar
