import React, { useState, useEffect, useContext} from "react";
import "../Css/topbar.css";
import { pomodoroContext } from '../hooks/Context'


const TopBar = () => {

const {nav, setNav} = useContext(pomodoroContext)


const handleActive = (index) => {

	const menuItems = [...nav];

	if(menuItems[0].active) menuItems[0].active = !menuItems[0].active
	if(menuItems[1].active) menuItems[1].active = !menuItems[1].active
	if(menuItems[2].active) menuItems[2].active = !menuItems[2].active
					
	menuItems[index].active = !menuItems[index].active

	
	setNav(menuItems);
}
console.log(nav)
	return <div className="menu-bg">

		{nav.map((item, index) => {
			return (
			<span
				
				key={index} 
				onClick={() => handleActive(index)}
				className={item.active ? "menu-active" : "menu-item"}
				>{item.item}</span>)
		})}
		


	</div>;
};

export default TopBar;
