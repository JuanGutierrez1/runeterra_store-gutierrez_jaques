import * as React from 'react';
import { Box, AppBar, Toolbar, Typography, Menu, MenuItem, Container, IconButton, Button } from "@mui/material"
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from "react-router-dom";
import CartWidget from './CartWidget'

const NavBar = ({brand, list = []}) => {
  let navigate = useNavigate()
  //Variables NavBar
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  //Funciones NavBar
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleClickCategory = (id) => {
    handleCloseNavMenu()
    navigate(`/category/${id}`)
  }

  return (
    
<AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{cursor: 'pointer', mr: 2, display: { xs: 'none', md: 'flex' } }}
            onClick={() => navigate('/')}
          >
            {brand}
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {list.map((menu) => (
                <MenuItem key={menu.title} onClick={() => handleClickCategory(menu.id)}>
                  <Typography textAlign="center">{menu.title}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ cursor: 'pointer', flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
            onClick={() => navigate('/')}
          >
            {brand}
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {list.map((menu) => (
              <Button
                key={menu.title}
                onClick={() => handleClickCategory(menu.id)}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {menu.title}
              </Button>
            ))}
          </Box>
          <CartWidget/>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default NavBar