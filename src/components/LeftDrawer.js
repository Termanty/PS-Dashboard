import React, {useState} from 'react'
import {
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  IconButton
 } from '@mui/material';
 import MenuIcon from '@mui/icons-material/Menu';
 const PAGES = ["Dashboard", "Products", "Free Tools", "Blogs", "Login", "SignUp"];

 const LeftDrawer = () => {
  const [openDrawer, setOpenDrawer] = useState(false)
  const anchor="right";
  return (
    <React.Fragment>
      <Drawer open={openDrawer}
      anchor={anchor}
      onClose={() => setOpenDrawer(false)}
      >
        <List>
          {
            PAGES.map((page, index) => (
              <ListItemButton key={index} onClick={()=>  setOpenDrawer(false)}>
              <ListItemIcon>
                <ListItemText>{page}</ListItemText>
              </ListItemIcon>
          </ListItemButton>
            ))
          }
        </List>
      </Drawer>
      <IconButton sx={{color:"white", marginLeft:"85%"}} onClick={() => setOpenDrawer(!openDrawer)}>
        <MenuIcon />
      </IconButton>
    </React.Fragment>
  )
}

export default LeftDrawer;
