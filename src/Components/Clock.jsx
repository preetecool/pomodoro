import React, { useContext, useEffect, useState } from "react";
import "../Css/clock.css";
import { pomodoroContext } from '../hooks/Context'


import TopBar from "./TopBar";


const Clock = () => {

	const {time, setTime} = useContext(pomodoroContext);

	const [seconds, setSeconds] = useState(0)

	const timerSeconds = seconds < 10 ? `0${seconds}`: seconds

	useEffect(()=> {
		 
		time.map((el, index) => {

			
	},[])
	
	
	
	
	return (

	<div className="main">
		<TopBar/>
		<div className="clockContainer">
			<div className="clock">


			{time.map((el, index) => {
				return time[index].active && <span key={index} className="time">{el.minutes}:{timerSeconds}</span>
			})}


				<span className = "pauseReset">PAUSE</span>
			</div>
		</div>
	</div>

	)
};

export default Clock;
