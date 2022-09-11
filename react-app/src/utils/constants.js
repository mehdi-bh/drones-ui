import {EnvironmentOutlined, HomeOutlined, SearchOutlined} from "@ant-design/icons";
import React from "react";

const MENU_ITEMS = {
    home: {
        label: "Home",
        key: "/home",
        icon: <HomeOutlined />,
    },
    search: {
        label: "Search",
        key: "/search",
        icon: <SearchOutlined />,
    },
    maps: {
        label: "Maps",
        key: "/maps",
        icon: <EnvironmentOutlined />,
    }
}

export {
    MENU_ITEMS,
}