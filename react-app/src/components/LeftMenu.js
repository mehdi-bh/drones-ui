import React, { useState } from "react";
import { Menu } from "antd";
import {useLocation, useNavigate} from 'react-router-dom';
import { formatMenuItem } from '../utils/utils';
import {MENU_ITEMS} from "../utils/constants";

const items = [
    formatMenuItem(MENU_ITEMS.home.label, MENU_ITEMS.home.key, MENU_ITEMS.home.icon),
    formatMenuItem(MENU_ITEMS.search.label, MENU_ITEMS.search.key, MENU_ITEMS.search.icon),
    formatMenuItem(MENU_ITEMS.maps.label, MENU_ITEMS.maps.key, MENU_ITEMS.maps.icon),
];

export default function LeftMenu(props) {
    const location = useLocation();
    const navigate = useNavigate();

    return (
        <Menu
            selectedKeys={location.pathname}
            mode="inline"
            theme="light"
            items={items}
            onClick={(event) => {
                navigate(event.key);
            }}
        />
    );
}

LeftMenu.propsTypes = {

}

