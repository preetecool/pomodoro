import React, { useContext, useState } from 'react'
import { pomodoroContext } from '../hooks/Context'

import upArrow from "../../assets/icon-arrow-up.svg"
import downArrow from "../../assets/icon-arrow-down.svg"



const TimeSettings = () => {

	const {time, setTime} = useContext(pomodoroContext)


	const settings = ["pomodoro", "short break", "long break"]

	const blockInvalidChars = (e) => {

		const invalid = ["e", "E", "!", "@", "#", "$", "%", "^", "&","*","(",")", "-", "_", "=", "+"]
		if(invalid.includes(e.key)) e.preventDefault();
	}

	const handleUpClick = (index) => {
		setTime(time[index] = +5)
		console.log(time[index]);
	}

		return (
			<>
				<h3>TIME (MINUTES)</h3>
				<form className="time-settings">
						{settings.map((timeSetting, index)=> {
						return (
						<div  key={index} className="input-container">
							<div className="input-main-wrapper">
								<h4 className = "input-title">{timeSetting}</h4>

								<div className="input-arrow-wrap" >

									<input className ="time-input" 
									type="number" 
									name={timeSetting} 
									placeholder="0 min" 
									onKeyDown={blockInvalidChars}
									value={time[index]}
									
									/>

									<div className="arrow-wrapper">
									<img className="arrow "src={upArrow} onClick={()=> handleUpClick()}/>
									<img  className="arrow"src={downArrow}/>
								</div>
								</div>
							</div>
						</div>

						)
						})}
						<div className="button-wrapper">
						<button className="time-submit-button">Apply</button>
						</div>
					</form>
			</>
		)
	}

export default TimeSettings
