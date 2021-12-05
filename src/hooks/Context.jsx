import React, {createContext, useState} from 'react'

export const pomodoroContext = createContext(null);

const Context = ({children}) => {

    const [nav, setNav] = useState();


    const [time, setTime] = useState([

        { name: "pomodoro", time: 0 },  
        { name: "short break", time : 0 }, 
        { name: "long break",time: 0 },
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
