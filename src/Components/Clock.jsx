import React, { useContext, useEffect, useState } from "react";
import "../Css/clock.css";

import TopBar from "./TopBar";
import { pomodoroContext } from "../hooks/Context";
import CircularProgress from "./CircularProgress";

const Clock = () => {

	const { time, pause, setPause } = useContext(pomodoroContext);

	const [seconds, setSeconds] = useState(0);
	const [minutes, setMinutes] = useState(0);
	//update the timer (replacing with a new timer in useEffect, every render)
	const [timerID, setTimerID] = useState(undefined);

	const [progress, setProgress] = useState(100);
	const [progressID, setProgressID] = useState(undefined)


	const timerSeconds = seconds < 10 ? `0${seconds}` : seconds;

	useEffect(() => {
		time
		.filter((e) => e.active)
		.map((el) => {
			setMinutes(el.minutes);
			setSeconds(0);
			setProgress(100);
				
			});
	}, [time]);

	useEffect(() => {
		if (pause) return;
		if (minutes === 0 && seconds === 0) return;

		if (timerID) {
			clearTimeout(timerID);
			setTimerID(undefined);
		}
		const timer = setTimeout(() => {
			if (seconds === 0) {
				if (minutes !== 0) {
					setMinutes((minutes) => minutes - 1);
					setSeconds(59);
				}
			} else setSeconds((seconds) => seconds - 1);
		}, 100);
		setTimerID(timer);
	}, [minutes, seconds]);

	// updating circular progress every n secodns.
	useEffect(() => {

		if(pause) return;
		if (progress === 0) return;

		if (progressID) {
			clearTimeout (progressID);
			setProgressID(undefined);
		}

		let updateEverySeconds = 0;
		time
		.filter((e) => e.active)
		.map((el) => {
				updateEverySeconds = el.minutes * 59 / 100
				
			});
		const elipseProgress = setTimeout(()=> {
			setProgress(progress => progress - 1);
		}, 100 * updateEverySeconds) // update progress - 1 
		setProgressID(elipseProgress);
	}, [progress, pause]);

	console.log(progress)

	const handlePause = (e) => {
		e.preventDefault();
		if (pause && seconds !== 0) setSeconds(seconds - 1);
		else if (pause && seconds === 0 && minutes !== 0) {
			setMinutes(minutes - 1);
			setSeconds(59);
		}

		setPause(!pause);
	};

	return (
		<div className="main">
			<TopBar />
			<div className="clockContainer">
				<div className="clock">
					<CircularProgress size={360} strokeWidth={10} percentage={progress} />
					<span className="time">
						{minutes}:{timerSeconds}
					</span>
					<button onClick={handlePause} className="pauseReset">
						{pause ? "CONTINUE" : "PAUSE"}
					</button>
				</div>
			</div>
		</div>
	);
};

export default Clock;
