import React, { useState, useEffect, useContext} from "react";
import "../Css/topbar.css";
import { pomodoroContext } from '../hooks/Context'


const TopBar = () => {

const {time, setTime} = useContext(pomodoroContext)


const handleActive = (index) => {

	const menuItems = [...time];

	if(menuItems[0].active) menuItems[0].active = !menuItems[0].active
	if(menuItems[1].active) menuItems[1].active = !menuItems[1].active
	if(menuItems[2].active) menuItems[2].active = !menuItems[2].active
					
	menuItems[index].active = !menuItems[index].active

	
	setTime(menuItems);
}
	return <div className="menu-bg">

		{time.map((item, index) => {
			return (
			<span
				
				key={index} 
				onClick={() => handleActive(index)}
				className={item.active ? "menu-active" : "menu-item"}
				>{item.name}</span>)
		})}
		


	</div>;
};

export default TopBar;
