import React, { useContext, useState } from 'react'
import { pomodoroContext } from '../hooks/Context'

import upArrow from "../../assets/icon-arrow-up.svg"
import downArrow from "../../assets/icon-arrow-down.svg"



const TimeSettings = () => {

	const {time, setTime, setModal} = useContext(pomodoroContext)


	const blockInvalidChars = (e) => {

		const invalid = ["e", "E", "!", "@", "#", "$", "%", "^", "&","*","(",")", "-", "_", "=", "+"]
		if(invalid.includes(e.key)) e.preventDefault();
	}


	const handleUpClick = (e, index) => {

		const copiedTime = [...time];

		if(copiedTime[index].minutes < 0) e.preventDefault()
		else copiedTime[index].minutes += 5		
		setTime(copiedTime)

		e.preventDefault()
	}


	
	const handleDownClick = (e, index) => {

		const copiedTime = [...time];

		if(copiedTime[index].minutes <= 5) copiedTime[index].minutes = 0
		else if(copiedTime[index].minutes >5)  copiedTime[index].minutes -= 5
		else e.preventDefault()
		setTime(copiedTime)

		e.preventDefault()
	}

	const handleTimeChange = (e, index) => {
		const copiedTime = [...time];
		
		copiedTime[index].minutes = parseInt(e.target.value,10)  
		setTime(copiedTime)

	}

	const handleSubmit = (e) => {
		e.preventDefault();
	}

		return (
			<>
				<h3>TIME (MINUTES)</h3>
				<form onSubmit={handleSubmit}className="time-settings">
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
									min={0}
									placeholder='0 min'
									onChange={(e) => handleTimeChange(e, index)}
									onKeyDown={blockInvalidChars}
								
									value={time[index].minutes}
									
									/>
									<div className="arrow-wrapper">
									<button onClick={(e)=> handleUpClick(e, index)} className="arrow"> <img src={upArrow}/></button>
									
									<button  onClick={(e)=> handleDownClick(e, index)}className="arrow"><img src={downArrow}/></button>
								</div>
								</div>
							</div>
						</div>

						)
						})}
						<div className="button-wrapper">
						<button onClick={()=> setModal(false)}className="time-submit-button">Apply</button>
						</div>
					</form>
			</>
		)
	}

export default TimeSettings
