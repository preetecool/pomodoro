import React, { useState, useContext } from "react";
import "../Css/settings.css"
import settingIcon from "../../assets/icon-settings.svg";
import closeIcon from "../../assets/icon-close.svg";

import TimeSettings from './TimeSettings'
import { pomodoroContext } from '../hooks/Context'


const Settings = () => {

	const {modal, setModal, toggleModal} = useContext(pomodoroContext)
	
	
	return <>
		<button onClick={toggleModal}><img className="settings-icon" src={settingIcon}></img></button>

		{modal &&
		
		<div className="modal">
			<div className ="modal-header">
				<h2 className="settings-title">Settings</h2>
				<button onClick={toggleModal}><img className="close-icon" src ={closeIcon}/></button>
			</div>
			<div className="settings">
				<TimeSettings/>
			</div>
		</div>
		
		}
	</>;
};

export default Settings;
