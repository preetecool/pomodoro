import React, { useContext, useEffect, useState } from "react";
import "../Css/clock.css";

import TopBar from "./TopBar";
import { pomodoroContext } from '../hooks/Context';
import CircularProgress from './CircularProgress';

const Clock = () => {

	const {time, setTime, modal, pause, setPause} = useContext(pomodoroContext);

	const [seconds, setSeconds] = useState(0)
	const [minutes, setMinutes] = useState(0)

	//update the timer (replacing with a new timer in UseEffect, every render)
	const [timerID, setTimerID] = useState(undefined)


	const timerSeconds = seconds < 10 ? `0${seconds}`: seconds


	useEffect(()=> {
		
			time.filter( e => e.active).map((el) => {
				setMinutes(el.minutes)
				setSeconds(0)
			})
				
	},[time])


	useEffect(() => {

			if(pause) return

			if(minutes === 0 && seconds === 0) return;
	
			if(timerID) {
				clearTimeout(timerID);
				setTimerID(undefined)
			}
			const timer = setTimeout(() => {
	
				if(seconds === 0) {
					if(minutes !== 0) {
						setMinutes(minutes => minutes - 1)
						setSeconds(59)
					}
				}else setSeconds(seconds => seconds - 1)
	
			}, 1000)
			setTimerID(timer)
	}, [minutes, seconds])


	const handlePause = (e) => {

		e.preventDefault();
		if(pause && seconds !==0) setSeconds(seconds - 1)
		else if(pause && seconds === 0 && minutes !== 0) {
			
			setMinutes(minutes - 1)
			setSeconds(59)
		}
		
		setPause(!pause);
	}

	

	return (
	<div className="main">
		<TopBar/>
		<div className="clockContainer">
			<div className="clock">	
			{/* <CircularProgress size={330} strokeWidth={15}/> */}
				<span className="time">{minutes}:{timerSeconds}</span>
					<button onClick={handlePause}className = "pauseReset">{pause ? "CONTINUE": "PAUSE"}</button>
			</div>
		</div>
	</div>

	)
};

export default Clock;
