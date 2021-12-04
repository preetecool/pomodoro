import React, {createContext, useState} from 'react'

export const pomodoroContext = createContext(null);

const Context = ({children}) => {

    const [nav, setNav] = useState();


    let [time, setTime] = useState(

        { workTime: 0 },  
        { shortBreak : 0 }, 
        { longBreak: 0 },
    );


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
