import React from "react";
import "../Css/settings.css"
import icon from "../../assets/icon-settings.svg";

const Settings = () => {
	return <div>
		<img className="settings-icon" src={icon}></img>
		<div className="modal"></div>
	</div>;
};

export default Settings;
