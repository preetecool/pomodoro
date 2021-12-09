import React, {createContext, useState} from 'react'

export const pomodoroContext = createContext(null);

const Context = ({children}) => {
 

    const [time, setTime] = useState([

        { name: "pomodoro", minutes: 0, active: true},  
        { name: "short break", minutes: 0, active: false}, 
        { name: "long break", minutes: 0, active: false},
    ]);

    const [modal, setModal] = useState(false)

    const toggleModal = () => {
		setModal(!modal)
	}



    return (
        <div>
        <pomodoroContext.Provider
        value = {{time, setTime, modal, setModal, toggleModal}}
        >
            {children}
        </pomodoroContext.Provider>
        </div>
    )
}

export default Context
