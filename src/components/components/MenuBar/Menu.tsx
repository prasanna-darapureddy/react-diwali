import React, { useState } from 'react'
import { Button, Box, CssBaseline, AppBar, Container, Toolbar, Typography, Stack, } from '@mui/material';
import { styled } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import logo from '../../assets/logo.png'
import './Menu.css'

const navItems = ['Home', 'Wishes', 'Best Deals', 'Donate & Gift', 'Contact'];

const Item = styled(Button)(({ theme }) => ({
  padding: theme.spacing(3),
  fontFamily: "raleway",
  fontWeight: 600,

}));

const MenuCard = styled(Container)(({ theme }) => ({
  backgroundColor: '#ffffe1',
  boxShadow: 'none',
}))

interface IState {
  menuButton: boolean;
  sticky: {
    position: string,
    top: string,
  };
}


function MenuBar() {
  const [menuButton, setMenuButton] = useState<IState['menuButton']>(false)
  const [sticky, setSticky] = useState<IState['sticky']>({ position: "fixed", top: "0" });


  React.useEffect(() => {
    window.addEventListener('scroll', stickNavbar);
    return () => window.removeEventListener('scroll', stickNavbar);
  }, []);
  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      windowHeight > 150 ? setSticky({ position: "fixed", top: "0" }) : setSticky({ position: "relative", top: '0' });
    }
  };

  const onClickMenuIcon = () => {
    setMenuButton(!menuButton)
  }


  // Make Nav Active when Clicked and scrolls down to section
  // document.addEventListener("click", function (event) {
  //   let active = document.querySelector(".menu.active");
  //   if (active) active.classList.remove("active");
  //   if (event.target.classList.contains("menu")) {
  //     event.target.classList.add("active");
  //     window.location.href = `#${event.target.id}`;
  //   }
  // });

  // var elm = document.querySelector('#menuBar');
  // var ms = new MenuSpy(elm,{
  //   // menu selector
  //   menuItemSelector: 'a[href^="#"]',
  //   // CSS class for active item
  //   activeClass   : 'active',
  //   // amount of space between your menu and the next section to be activated.
  //   threshold     : 15,
  //   // enable or disable browser's hash location change.
  //   enableLocationHash: true,
  //   // timeout to apply browser's hash location.
  //   hashTimeout   : 600,
  //   // called every time a new menu item activates.
  //   callback      : null

  // });

  return (
    <>
      <Box sx={{ display: 'flex', backgroundColor: 'rgb(255, 255, 225, 10)', sticky }} >
        <MenuCard id="menuBar">
          <CssBaseline />
          <AppBar component="nav" >
            <Toolbar sx={{ backgroundColor: 'rgb(255, 255, 225, 10)' }} id="menuContainer" >
              <Typography
                component="div"
                sx={{ flexGrow: 1 }}
              >
                <Box component='img' alt='logo' src={logo} height={80} />
              </Typography>
              <Box sx={{ display: { xs: 'none', sm: 'none', md: 'block' } }} >
                {navItems.map((item) => (
                  <Item key={item} sx={{ color: '#521407' }} className="menu-item">
                    <a href={`#${item}`} className='menu' id={`${item}1`} onClick={e => {
                      let menus = document.getElementById(`${item}`);
                      e.preventDefault();
                      menus && menus.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }}>
                      {item}
                    </a>
                  </Item>
                ))}
              </Box>
              <Box sx={{ display: { sm: 'block', md: 'none' }, color: 'red', position: 'relative', borderWidth: '1px', borderStyle: 'solid', borderColor: 'red' }} >
                <MenuIcon onClick={onClickMenuIcon} />
              </Box>
            </Toolbar>
          </AppBar>
        </MenuCard >
      </Box>

      {menuButton ?
        <Stack direction='column' sx={{ bgcolor: '#fff', display: { md: 'block', lg: 'none' }, position: 'absolute', top: '100px', right: '0px' }}>
          {navItems.map((item) => (
            <Item key={item} sx={{ color: '#521407' }} className="menu-item" id='menuItems'>
              <a href={`#${item}`} className='menu'>{item}</a>
            </Item>
          ))}
        </Stack>
        :
        null
      }
    </>
  )
}

export default MenuBar

