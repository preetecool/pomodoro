import React, { useState, useEffect, useContext} from "react";
import "../Css/topbar.css";
import { pomodoroContext } from '../hooks/Context'


const TopBar = () => {

const {nav, setNav} = useContext(pomodoroContext)

const [loading, setLoading] = useState(true)

const navItems = [

	{item: "pomodoro", active: true},

	{item: "short break", active: false},
	
	{item: "long break", active: false},
]




useEffect(() => {
	
	const menuSet = () => {
		setNav(navItems);
		setLoading(false)
	}
	menuSet()
}, [])


const handleActive = (index) => {

	const menuItems = [...navItems];
	
	if(menuItems[0].active) menuItems[0].active = !menuItems[0].active
	menuItems.active = !menuItems.active
	menuItems[index].active = !menuItems[index].active;

	setNav(menuItems);
}

	return <div className="menu-bg">

		{ !loading && nav.map((item, index) => {
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
