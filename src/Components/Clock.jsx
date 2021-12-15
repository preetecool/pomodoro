import React, { useContext, useEffect, useState } from "react";
import "../Css/clock.css";
import { pomodoroContext } from '../hooks/Context'


import TopBar from "./TopBar";


const Clock = () => {

	const {time, setTime, modal} = useContext(pomodoroContext);

	const [seconds, setSeconds] = useState(0)
	const [minutes, setMinutes] = useState(0)

	//update the timer (replacing with a new timer in UseEffect, every render)
	const [timerID, setTimerID] = useState(undefined)


	const timerSeconds = seconds < 10 ? `0${seconds}`: seconds

	useEffect(()=> {
		
			time.filter( e => e.active === true).map((el) => {
				setMinutes(el.minutes)
				setSeconds(0)
				

			})
				
	},[time])



	useEffect(() => {

			if(minutes === 0 & seconds === 0) return;
	
			if(timerID) {
				clearTimeout(timerID);
				setTimerID(undefined)
			}
			const timer = setTimeout(() => {
	
				if(seconds === 0) {
					if(minutes !== 0) {
						setMinutes(minutes => minutes -1)
						setSeconds(59)
					}
				}else setSeconds(seconds => seconds -1)
	
			}, 1000)
			setTimerID(timer)


	
	

	}, [minutes, seconds])

	
	
	
	return (
	<div className="main">
		<TopBar/>
		<div className="clockContainer">
			<div className="clock">	
				<span className="time">{minutes}:{timerSeconds}</span>
				<span className = "pauseReset">PAUSE</span>
			</div>
		</div>
	</div>

	)
};

export default Clock;
