import React from 'react'
import styles from './NavBar.module.scss';

import { Link } from "@reach/router";

const NavBar = () => {
  return (
    <nav className={styles.NavBar}>
      <Link to="/">Home</Link>
      <Link to="Favourites">Favourites</Link>
      <Link to="Login">Login</Link>
    </nav>
  );
};

export default NavBar;