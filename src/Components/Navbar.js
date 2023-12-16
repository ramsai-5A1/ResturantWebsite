import React, { useState } from "react";
import Logo from "../Assets/Logo.svg";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import CommentRoundedIcon from "@mui/icons-material/CommentRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import IconButton from '@mui/material/IconButton';
import { HiOutlineBars3 } from "react-icons/hi2";
import Drawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import { ListItem, ListItemButton, ListItemIcon } from "@mui/material";
import ListItemText from "@mui/material/ListItemText";



const Navbar = () => {
    const [openMenu, setOpenMenu] = useState(false);
    const menuOptions = [
        {
            text: "Home",
            icon: <HomeIcon /> 
        },
        {
            text: "About",
            icon: <InfoIcon /> 
        },
        {
            text: "Testimonials",
            icon: <CommentRoundedIcon /> 
        },
        {
            text: "Contact",
            icon: <PhoneRoundedIcon /> 
        },
        {
            text: "Cart",
            icon: <ShoppingCartRoundedIcon /> 
        }
    ];

    const handleBookings = () => {
        
    }

    return <nav>
        <div className="nav-logo-container">
            <img src={Logo} alt="" />
        </div>

        <div className="navbar-links-container">
            <a href="">Home</a>
            <a href="">About</a>
            <a href="">Testimonials</a>
            <a href="">Contact</a>
            <IconButton href="" color="black" aria-label="add to shopping cart">
                <AddShoppingCartIcon />
            </IconButton>

            <button className="primary-button" onClick={handleBookings}>Bookings Now</button>
        </div>

        <div className="navbar-menu-container">
            <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
        </div>

        <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor="right">
            <Box sx={{ width: 250 }}
                role="presentation"
                onClick={() => setOpenMenu(false)}
                onKeyDown={() => setOpenMenu(false)}
            >
                <List>
                    {
                        menuOptions.map((item) => (
                            <ListItem key={item.text} disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>{item.icon}</ListItemIcon>
                                    <ListItemText primary={item.text} />
                                </ListItemButton>
                            </ListItem>
                        ))
                    }
                </List>

            </Box>
        </Drawer>
    </nav>
};

export default Navbar;