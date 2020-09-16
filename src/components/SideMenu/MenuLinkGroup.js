import React, { useState, useEffect } from "react";
import { CSSTransition } from "react-transition-group";

import { NavLink } from "react-router-dom";

const MenuLinkGroup = ({ menu, toggleClick }) => {
  const { name, icon, children } = menu;
  const [css, setCss] = useState("");

  useEffect(() => {
    let clsName = "link";
    if (menu.active) {
      clsName += " menu-active";
    }
    if (menu.open) {
      clsName += " open";
    }
    setCss(clsName);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [menu]);

  return (
    <li>
      <div className={css} onClick={() => toggleClick(menu)}>
        <i className="iconify" data-icon={`mdi:${icon}`} data-inline="false" />
        <span>{name}</span>
        <CSSTransition
          in={menu.open}
          timeout={{ enter: 150, exit: 150 }}
          classNames="arrow"
        >
          <span className="arrow">
            <i
              className="iconify"
              data-icon="mdi:chevron-right"
              data-inline="false"
            />
          </span>
        </CSSTransition>
      </div>
      <CSSTransition
        in={menu.open}
        unmountOnExit
        timeout={{ enter: 100, exit: 100 }}
        classNames="submenu"
      >
        <ul>
          {children.map((child, index) => {
            const { name, url } = child;
            return (
              <li key={index}>
                <NavLink
                  to={url}
                  className={child.active ? "sub-link menu-active" : "sub-link"}
                >
                  {name}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </CSSTransition>
    </li>
  );
};

export default MenuLinkGroup;
