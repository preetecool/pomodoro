import React from 'react'
import '../Css/circularprogress.css';

// passing size as props
const CircularProgress = ({size, strokeWidth}) => {

const viewBox = ` 0 0 ${size} ${size}`
const radius = (size - strokeWidth) / 2


    return (
        <div className = 'circularProgress'>
            <svg width = {size} height={size} viewBox={viewBox} xmlns="http://www.w3.org/2000/svg">

				<circle 
                cx={size / 2} 
                cy={size / 2} 
                r={radius}
                strokeWidth={`${strokeWidth}px`} 
                fill="none"
                stroke="red"
                />
				</svg>
        </div>
    )
}

export default CircularProgress
