import React from "react";
import "../Css/settings.css"
import settingIcon from "../../assets/icon-settings.svg";
import closeIcon from "../../assets/icon-close.svg";

import TimeSettings from './TimeSettings'

const Settings = () => {
	return <>
		<img className="settings-icon" src={settingIcon}></img>
		<div className="modal">
			<div className ="modal-header">
				<h2 className="settings-title">Settings</h2>
				<img className="close-icon" src ={closeIcon}/>
			</div>
			<div className="settings">
				<TimeSettings/>
			</div>
		</div>
	</>;
};

export default Settings;
