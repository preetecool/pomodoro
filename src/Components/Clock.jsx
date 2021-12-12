import React, { useContext, useEffect, useState } from "react";
import "../Css/clock.css";
import { pomodoroContext } from '../hooks/Context'


import TopBar from "./TopBar";


const Clock = () => {

	const {time, setTime} = useContext(pomodoroContext);

	const [seconds, setSeconds] = useState(0)
	const [minutes, setMinutes] = useState(0)

	const timerSeconds = seconds < 10 ? `0${seconds}`: seconds

	useEffect(()=> {
		 

		time.filter( e => e.active === true).map((el, index) => {
			if(el.minutes !== 0) {
				setSeconds(59)
				const timer = () => {
					setInterval(() => {
						setSeconds(seconds => seconds - 1)
					},1000)
					// if(seconds === 0 && el.minutes !==0) {
					// 	setTime({...el, minutes: minutes - 1})
					// 	setSeconds(seconds => seconds - 1)

					// }
				}
				timer();
				return clearInterval(timer);
			}
			
		})
		
		// set seconds to 59
		//every second 59 - 1
		// when seconds reaches 0, time[index].minutes - 1 until minutes reaches 0.
		
			
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
