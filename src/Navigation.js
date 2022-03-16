import React from "react";
import { NavLink } from "react-router-dom";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { makeStyles } from "@mui/styles";
const useStyles = makeStyles({
  navLink: {
    color: "white",
    padding: "14px 16px",
    textDecoration: "none"
  }
})
function Navigation() {
  const classes = useStyles();
  return (
    <AppBar positiom="static">
      <Toolbar>
        <Typography>
          React Project
        </Typography>
        <NavLink className={classes.navLink} to="/">Product</NavLink>
        <NavLink className={classes.navLink} to="/admin">Admin</NavLink>
      </Toolbar>
    </AppBar>
    // <ul id="nav-ul">
    //   <li className="nav-li"><NavLink className="nav-link" to="/">Product</NavLink></li>
    //   <li className="nav-li"><NavLink className="nav-link" to="/admin">Admin</NavLink></li>
    // </ul>
  );

}
export default Navigation;