import React, { useEffect, useState } from "react";
import "../Css/circularprogress.css";

// passing size as props
const CircularProgress = ({ size, strokeWidth, percentage }) => {
	const [progress, setProgress] = useState(0);

	useEffect(() => {
		setProgress(percentage);
	}, [percentage]);

	const viewBox = ` 0 0 ${size} ${size}`;
	const radius = (size - strokeWidth) / 2;
	const circumference = radius * Math.PI * 2;
	const dash = (progress * circumference) / 100;

	return (
		<div className="circularProgress">
			<svg
				width={size}
				height={size}
				viewBox={viewBox}
				xmlns="http://www.w3.org/2000/svg"
			>
				<circle
					cx={size / 2}
					cy={size / 2}
					r={radius}
					strokeWidth={`${strokeWidth}px`}
					fill="none"
					stroke="#161932"
				/>
				<circle
					cx={size / 2}
					cy={size / 2}
					r={radius}
					strokeWidth={`${strokeWidth}px`}
					fill="none"
					stroke="#F87070"
					transform={`rotate(-90 ${size / 2} ${size / 2})`}
					strokeDasharray={[dash, circumference - dash]}
					strokeLinecap="round"
					style={{ transition: "all 0.1s" }}
				/>
			</svg>
		</div>
	);
};

export default CircularProgress;
