import React, { useContext, useState } from 'react'
import { pomodoroContext } from '../hooks/Context'

import upArrow from "../../assets/icon-arrow-up.svg"
import downArrow from "../../assets/icon-arrow-down.svg"



const TimeSettings = () => {

	const {time, setTime} = useContext(pomodoroContext)

	const blockInvalidChars = (e) => {

		const invalid = ["e", "E", "!", "@", "#", "$", "%", "^", "&","*","(",")", "-", "_", "=", "+"]
		if(invalid.includes(e.key)) e.preventDefault();
	}

	const handleUpClick = (event, index) => {

		const copiedTime = [...time];
		copiedTime[index].time = copiedTime[index].time + 5
		setTime(copiedTime)
	}
	console.log(time[0].time);
	
		return (
			<>
				<h3>TIME (MINUTES)</h3>
				<form className="time-settings">
						{time.map((timeSetting, index)=> {
						return (
						<div  key={index} className="input-container">
							<div className="input-main-wrapper">
								<h4 className = "input-title">{time.name}</h4>

								<div className="input-arrow-wrap" >

									<input className ="time-input" 
									key={index}
									type="number" 
									name={timeSetting} 
									placeholder="0 min" 
									onKeyDown={blockInvalidChars}
									// onChange={}
									value={time.time}
									
									/>

									<div className="arrow-wrapper">
									<button onClick={()=> handleUpClick(time[index].time)} className="arrow"> <img src={upArrow}/></button>
									
									<button className="arrow"><img src={downArrow}/></button>
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
