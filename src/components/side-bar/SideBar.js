import React, { useContext } from "react";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";

import { ThemeContext } from "../../context/theme/theme.context";

import styles from "./SideBar.module.scss";

function SideBar() {
  const { onThemeToggle, theme } = useContext(ThemeContext);
  return (
    <div className={styles.side_bar}>
      <div className={styles.logo_container}>
        <img
          alt="ab logo"
          src="/static/images/ab_logo.png"
          className={styles.logo}
        />
      </div>
      <div className={styles.menu_container}>
        {theme === "light" ? (
          <DarkModeIcon
            className={styles.mode_icon}
            onClick={() => {
              onThemeToggle();
            }}
          />
        ) : (
          <LightModeIcon
            className={styles.mode_icon}
            onClick={() => {
              onThemeToggle();
            }}
          />
        )}
        <div className={styles.separator_line}></div>
        <img
          alt="user avatar"
          src="/static/images/user.png"
          className={styles.avatar}
        />
      </div>
    </div>
  );
}

export default SideBar;
