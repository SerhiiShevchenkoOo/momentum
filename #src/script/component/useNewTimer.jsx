import React, { useState, useEffect } from "react";


const useNewTimer = (currentDate, t=1000) => {
	const [date, setDate] = useState(currentDate);

	useEffect(() => {
		const timerID = setInterval(() => tick(), t);
		return function cleanup() {
			clearInterval(timerID);
		};
	});

	function tick() {
		setDate(new Date());
	}

	return date;
};
export default useNewTimer