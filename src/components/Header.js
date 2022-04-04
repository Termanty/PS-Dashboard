import React,{useState} from "react";
import { AppBar,
  Toolbar,
  useMediaQuery,
  useTheme,
  Tabs,
  Tab,
  Button
} from "@mui/material";
import Avatar from '@mui/material/Avatar';
import LeftDrawer from "./LeftDrawer";
const PAGES = ["Dashboard", "Products", "Free Tools", "Blogs"];

const Header = () => {
    const [value, setValue] = useState(false);
    const theme = useTheme();
    const isMatch = useMediaQuery(theme.breakpoints.down("md"));

    return (
      <React.Fragment>
           <AppBar position="sticky" sx={{background: "#3d4044"}}>
               <Toolbar>
               <Avatar
               sx={{color:"orange",background:"transparent"}}
               >
                 PHZ</Avatar>
                {
                  isMatch ? (
                    <LeftDrawer />
                  ) : (
                    <>
                    <Tabs
                    sx={{marginLeft:"auto"}}
                    textColor="inherit"
                    value={value}
                    onChange={(e,value) => setValue(value)}
                    indicatorColor="secondary"
                    >
                      {
                      PAGES.map((page,index) => (
                        <Tab key={index} label={page} />
                      ))
                      }
                    </Tabs>
                      <Button
                      sx={{marginLeft:"auto"}} variant="contained"
                      >
                        Login{" "}
                      </Button>
                      <Button
                      sx={{marginLeft:"10px"}} variant="contained">
                        SignUp{ " "}
                      </Button>
                      </>
                  )
                }
               </Toolbar>


           </AppBar>
           </React.Fragment>
    );
};

export default Header;
