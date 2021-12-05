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

	const handleUpClick = (e, index) => {

		const copiedTime = [...time];

		copiedTime[index].time = copiedTime[index].time + 5

		setTime(copiedTime)

		e.preventDefault()
	}
	console.log(time)
	

	const handleTimeChange = (e, index) => {

		const copiedTime = [...time];
		copiedTime[index].time += parseInt(e.target.value,10)  

		setTime(copiedTime)

	}

	
	// (e) =>setTime(...time[index], time: e.target.value)



		return (
			<>
				<h3>TIME (MINUTES)</h3>
				<form className="time-settings">
						{time.map((timeSetting, index)=> {
						return (
								<div  key={index} className="input-container">
									<div className="input-main-wrapper">
									<h4 className = "input-title">{timeSetting.name}</h4>

									<div className="input-arrow-wrap" >

									<input className ="time-input" 
									key={index}
									type="number" 
									name={timeSetting.name} 
									placeholder='0 min'
									onChange={(e) => handleTimeChange(e, index)}
									onKeyDown={blockInvalidChars}
								
									value={time.time}
									
									/>
									<div className="arrow-wrapper">
									<button onClick={(e)=> handleUpClick(e, index)} className="arrow"> <img src={upArrow}/></button>
									
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
