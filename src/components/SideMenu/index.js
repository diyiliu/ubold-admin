import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import menuList from "../../assets/menus";
import MenuLink from "./MenuLink";
import MenuLinkGroup from "./MenuLinkGroup";

const SideMenu = () => {
  const [menus, setMenus] = useState(menuList);

  const location = useLocation();
  useEffect(() => {
    const handleActive = (menu) => {
      const list = menus.map((m) => {
        if (m.name === menu.name) {
          return { ...menu, active: true };
        }

        if (m.children) {
          const { children } = m;
          m.active = false;
          m.open = false;
          children.forEach((child) => {
            if (menu.name === child.name) {
              child.active = true;
              m.active = true;
              m.open = true;
            } else {
              child.active = false;
            }
          });

          return { ...m };
        }

        return { ...m, active: false };
      });
      setMenus(list);
    };

    const { pathname } = location;
    menuList.some((m) => {
      if (pathname === m.url) {
        handleActive({ ...m });
        return true;
      }

      if (m.children) {
        const { children } = m;
        const child = children.find((child) => pathname === child.url);
        if (child) {
          handleActive({ ...child });
          return true;
        }
      }

      return false;
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  const handleToggle = (menu) => {
    const list = menus.map((m) => {
      if (m.name === menu.name) {
        return { ...menu, open: menu.open ? false : true };
      }

      return { ...m, open: false };
    });
    setMenus(list);
  };

  return (
    <div className="side-menu">
      <ul className="menu">
        {menus &&
          menus.map((menu, index) => {
            if (menu.children) {
              return (
                <MenuLinkGroup
                  key={index}
                  menu={menu}
                  toggleClick={handleToggle}
                />
              );
            }
            return <MenuLink key={index} menu={menu} />;
          })}
      </ul>
    </div>
  );
};

export default SideMenu;
