import React, { createContext, useState } from "react";

export const pomodoroContext = createContext(null);

const Context = ({ children }) => {
	const [time, setTime] = useState([
		// make 1 object
		{ name: "pomodoro", minutes: 0, active: true },
		{ name: "short break", minutes: 0, active: false },
		{ name: "long break", minutes: 0, active: false },
	]);

	const [modal, setModal] = useState(false);

	const toggleModal = () => {
		setModal(!modal);
	};

	const [pause, setPause] = useState(false);

	return (
		<div>
			<pomodoroContext.Provider
				value={{ time, setTime, modal, setModal, toggleModal, pause, setPause }}
			>
				{children}
			</pomodoroContext.Provider>
		</div>
	);
};

export default Context;
