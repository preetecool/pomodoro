import React, {createContext, useState} from 'react'

export const pomodoroContext = createContext(null);

const Context = ({children}) => {

    const [nav, setNav] = useState([
    

            {item: "pomodoro", active: true},
        
            {item: "short break", active: false},
            
            {item: "long break", active: false},
        
    ]);

    const [time, setTime] = useState([

        { name: "pomodoro", minutes: 0},  
        { name: "short break", minutes: 0}, 
        { name: "long break", minutes: 0},
    ]);

    const [modal, setModal] = useState(false)

    const toggleModal = () => {
		setModal(!modal)
	}



    return (
        <div>
        <pomodoroContext.Provider
        value = {{nav, setNav, time, setTime, modal, setModal, toggleModal}}
        >
            {children}
        </pomodoroContext.Provider>
        </div>
    )
}

export default Context
