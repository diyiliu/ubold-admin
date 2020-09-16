import React from "react";
import { NavLink } from "react-router-dom";

const MenuLink = ({ menu }) => {
  const { name, url, icon } = menu;

  return (
    <li>
      <NavLink to={url} className={menu.active ? "link menu-active" : "link"}>
        <i className="iconify" data-icon={`mdi:${icon}`} data-inline="false" />
        <span>{name}</span>
      </NavLink>
    </li>
  );
};

export default MenuLink;
