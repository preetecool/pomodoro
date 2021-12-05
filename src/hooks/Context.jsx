import React, {createContext, useState} from 'react'

export const pomodoroContext = createContext(null);

const Context = ({children}) => {

    const [nav, setNav] = useState();


    const [time, setTime] = useState([

        { name: "pomodoro", time: null },  
        { name: "short break", time : null }, 
        { name: "long break",time: null },
    ]);


    return (
        <div>
        <pomodoroContext.Provider
        value = {{nav, setNav, time, setTime}}
        >
            {children}
        </pomodoroContext.Provider>
        </div>
    )
}

export default Context
