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


		// time.filter( e => e.active === true).map((el) => {
		// 	if(el.minutes !== 0) {
		// 		setSeconds(59)
		// 		setMinutes(el.minutes)
		// 		}

		// 		let timer = setInterval(() => {
		// 			clearInterval(timer);
		
		// 			if(seconds === 0) {
		// 				if(minutes !== 0) {
		// 					setSeconds(59)
		// 					setMinutes(minutes => minutes - 1)	
		// 				}
						
		// 			}else {
		// 				setSeconds(seconds => seconds -1)
		// 			}
		
		// 		}, 100)

		// })
		time.filter( e => e.active === true).map((el) => {
				setMinutes(el.minutes)

				const timer = () => {

				

						setInterval(() => {

							if(seconds === 0 && minutes !== 0) {
								setMinutes (minutes - 1)
								setSeconds(59)
							}

							if(seconds !== 0 && minutes !==0) {
								setSeconds(seconds => seconds - 1)
							}

							else if(seconds ===0 && minutes ===0) return;
						},1000)

				}
				timer();
				return clearInterval(timer);
			
		})		
	},[seconds])
	
	
	
	
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
