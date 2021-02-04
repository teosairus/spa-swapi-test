import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Logo from "../../assets/logo.png";
import "./header-styles.scss";

const Header = () => {
  const [activeNav, setActiveNav] = useState("films");
  const location = useLocation();

  useEffect(() => {
    if (location.pathname.includes("people")) {
      setActiveNav("people");
    } else {
      setActiveNav("films");
    }
  }, [location]);

  return (
    <Grid container spacing={3} classes={{ root: "header-container" }}>
      <Grid item xs={6}>
        <Link to="/">
          <img className="header-logo" src={Logo} alt="logo" />
        </Link>
      </Grid>
      <Grid item xs={6} classes={{ root: "header-nav" }}>
        <Link
          className={
            activeNav === "films" ? "header-nav-link-active" : "header-nav-link"
          }
          to="/"
        >
          FILMS
        </Link>
        <Link
          className={
            activeNav === "people"
              ? "header-nav-link-active"
              : "header-nav-link"
          }
          to="/people"
        >
          PEOPLE
        </Link>
      </Grid>
    </Grid>
  );
};

export default Header;
