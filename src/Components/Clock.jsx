import React from "react";
import "../Css/clock.css";

import TopBar from "./TopBar";


const Clock = () => {
	return <div className="main">
		<TopBar/>
		<div className="clock">
			<span className="time">15:00</span>
			<span className = "pauseReset">PAUSE</span>
		</div>
	</div>;
};

export default Clock;
