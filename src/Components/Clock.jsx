import React, { useContext, useEffect, useState } from "react";
import "../Css/clock.css";
import { pomodoroContext } from '../hooks/Context'


import TopBar from "./TopBar";


const Clock = () => {

	const {time, nav} = useContext(pomodoroContext);

	const [seconds, setSeconds] = useState(60)

	const timerSeconds = seconds < 10 ? `0${seconds}`: seconds


	// useEffect(() => {
		
	// 	const timer = (index) => {

			
	// 		if(time[index].minutes < 0) setSeconds(0);

	// 		if(timerSeconds > 0 ) {
	// 			setTimeout(() => setSeconds(seconds - 1), 1000)
	// 		}
	// 	}

	// 	timer()

	// },[])
	

	



	return (

	<div className="main">
		<TopBar/>
		<div className="clockContainer">
			<div className="clock">
				{nav[0].active &&
					<span className="time">{time[0].minutes}:{timerSeconds}</span>
				}

				{nav[1].active &&
					<span className="time">{time[1].minutes}:{timerSeconds}</span>
				}

				{nav[2].active &&
					<span className="time">{time[2].minutes}:{timerSeconds}</span>
				}

				<span className = "pauseReset">PAUSE</span>
			</div>
		</div>
	</div>

	)
};

export default Clock;
