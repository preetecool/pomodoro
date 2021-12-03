import React from 'react'

const TimeSettings = () => {
    return (
        <div>
            <form>
				<h3>TIME (MINUTES)</h3>
				<div className="time-settings">

					<div className="input-wrapper">
						<h4 className ="input-title">pomodoro</h4>
						<input type="number" name="pomodoro"></input>
					</div>

					<div className="input-wrapper">
						<h4 className ="input-title">short break</h4>
						<input type="number" name="pomodoro"></input>
					</div>

					<div className="input-wrapper">
						<h4 className ="input-title">long break</h4>
						<input className ="time-input"type="number" name="long-break"></input>
					</div>
					
				</div>
				</form>
        </div>
    )
}

export default TimeSettings
