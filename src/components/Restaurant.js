import React, { useState } from 'react';
import "./style.css";
import MenuCard from './MenuCard';
import Menu from './menuApi';
import Navbar from './Navbar';


const uniqueList = [
    ...new Set(Menu.map((item) => {
        return item.category
    })),
    "All",
];

console.log(uniqueList)

function Restaurant() {

    const [menuData, setMenuData] = useState(Menu);
    const [menuList, setMenuList] = useState(uniqueList);

    const filterItem = (category) => {
        if(category === "All") {
            setMenuData(Menu);
            return;
        }
        const updatedList = Menu.filter((item) => {
            return item.category === category;
        });
        setMenuData(updatedList);
    }

    return (
        <>
            <Navbar filterItem={filterItem} menuList={menuList} />
            <MenuCard menuData={menuData} />
        </>
    )
}

export default Restaurant
