import React,{useState} from "react";
import { AppBar} from "@mui/material";
import { Toolbar} from "@material-ui/core";
import { Container } from "@mui/material";
import { SwipeableDrawer } from "@material-ui/core";
import { Divider } from "@material-ui/core";
import Link from "@material-ui/core/Link";
import Avatar from "@material-ui/core/Avatar"
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from '@mui/icons-material/Menu';
import {makeStyles} from "@material-ui/core/styles";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

const navigationLinks = [
    {name: "Dashboard", href: ""},
    {name: "Products", href: ""},
    {name: "Free Tools", href: ""},
    {name: "Blogs", href: ""},
    {name: "Login", href: ""},
    {name: "SignUp", href: ""}
];

const useStyles = makeStyles((theme) => ({
    link:{
        marginRight: 20
    },
    avatar: {
        marginRight:"auto",
        color:"orange",
        fontStyle:"bold",
        backgroundColor:"transparent",
        borderRadius: 0,
        height: 30,
        border: "2px solid orange",
        borderLeft:"12px solid transparent",
        borderRight: "12px solid transparent",
    },
}));

const Header = () => {
    const [open, setOpen] = useState(false);
    const styles = useStyles();

    return (
           <AppBar position="sticky" color="primary">
               <Container maxWidth="md">
               <Toolbar disableGutters>
               <Avatar className={styles.avatar}>PHZ</Avatar>
               <Hidden xsDown>
               {navigationLinks.map((item) => (
                    <Link
                    key={item.name}
                    className={styles.link}
                    color="inherit"
                    variant="button"
                    underline="none"
                    href={item.href}
                    >
                    {item.name}
                    </Link>
                ))}
               </Hidden>
               <Hidden smUp>
                <IconButton >
                    <MenuIcon color="white" onClick={() => setOpen(true)}/>
                </IconButton>
               </Hidden>
               </Toolbar>
               </Container>
               <SwipeableDrawer anchor="right" open={open} onOpen={() => setOpen(true)} onClose={() => setOpen(false)}>
                   <span>
                <IconButton>
                    <ChevronRightIcon onClick={() => setOpen(false)}/>
                </IconButton>
                </span>
                <Divider />
                <List>
                {navigationLinks.map((item) => (
                    <ListItem>
                    <Link
                    key={item.name}
                    className={styles.link}
                    color="textSecondary"
                    variant="button"
                    underline="none"
                    href={item.href}
                    >
                    {item.name}
                    </Link>
                    </ListItem>
                ))}
                </List>
               </SwipeableDrawer>
           </AppBar>
    );
};

export default Header;
