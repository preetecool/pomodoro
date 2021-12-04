import React from 'react'
import upArrow from "../../assets/icon-arrow-up.svg"
import downArrow from "../../assets/icon-arrow-down.svg"


const TimeSettings = () => {
    return (
        <div>
            <form>
				<h3>TIME (MINUTES)</h3>
				<div className="time-settings">

					<div className="input-wrapper">
						
						<h4 className ="input-title">pomodoro</h4>
						<input type="number" name="pomodoro" placeholder="00 mins"></input>

					</div>

					<div className="input-wrapper">
						<h4 className ="input-title">short break</h4>
						
						<input type="number" name="pomodoro" placeholder="00 mins"></input>

						<div className="arrow-wrapper">
							<img className="arrow"src={upArrow}/>
							<img  className="arrow"src={downArrow}/>
						</div>

					</div>

					<div className="input-wrapper">
						<h4 className ="input-title">long break</h4>
						<input className ="time-input"type="number" name="long-break" placeholder="00 mins"></input>
					</div>
					
				</div>
				</form>
        </div>
    )
}

export default TimeSettings
