import React from "react";
import "./navbar.css";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";

const Navbar = () => {
  return (
    <div>
      <Box>
        <AppBar>
          <Toolbar className="navbar-container">
            <ul>
              <li>
                <a href="">Home</a>
              </li>
              <li>
                <a href="">Shop</a>
              </li>
              <li>
                <a href="">About Us</a>
              </li>
            </ul>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
};

export default Navbar;
