import React, { useContext } from "react";
import "../Css/clock.css";
import { pomodoroContext } from '../hooks/Context'


import TopBar from "./TopBar";


const Clock = () => {
	const {time, setTime, nav, toggleModal} = useContext(pomodoroContext);

	return (

	<div className="main">
		<TopBar/>
		<div className="clockContainer">
			<div className="clock">

				{nav[0].active &&
					<span className="time">{time[0].time}</span>
				}

				{nav[1].active &&
					<span className="time">{time[1].time}</span>
				}

				{nav[2].active &&
					<span className="time">{time[2].time}</span>
				}


				


				<span className = "pauseReset">PAUSE</span>
			</div>
		</div>
	</div>

	)
};

export default Clock;
