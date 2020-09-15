import React from "react";
import { NavLink } from "react-router-dom";

const MenuLinkGroup = ({ menu, toggleClick, activeClick }) => {
  const { name, icon, children } = menu;
  return (
    <li className={menu.open ? "open" : ""}>
      <div
        className={menu.active ? "link menu-active" : "link"}
        onClick={() => toggleClick(menu)}
      >
        <i className="iconify" data-icon={`mdi:${icon}`} data-inline="false" />
        <span>{name}</span>
        <span className="arrow">
          <i
            className="iconify"
            data-icon="mdi:chevron-right"
            data-inline="false"
          />
        </span>
      </div>
      <ul>
        {children.map((child, index) => {
          const { name, url } = child;
          return (
            <li key={index}>
              <NavLink
                to={url}
                className={child.active ? "sub-link menu-active" : "sub-link"}
                onClick={() => activeClick(child)}
              >
                {name}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </li>
  );
};

export default MenuLinkGroup;
