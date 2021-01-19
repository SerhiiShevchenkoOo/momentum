import React,{useState,useEffect} from 'react'
import styleComponent from '../stylesJs/styleComponent'



function getRandomInt(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	let image = Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается
	return (image < 10) ? '0' + image : image
}

 const setHour=(hour)=> hour< 6 ? `./assets/images/night/${getRandomInt(1, 21)}.jpg` :
			hour < 12 ? `./assets/images/morning/${getRandomInt(1, 21)}.jpg` :
				hour < 19 ? `./assets/images/day/${getRandomInt(1, 21)}.jpg` :
					`./assets/images/evening/${getRandomInt(1, 21)}.jpg`


export default function ScreenBg() {
	const [image, setImg] = useState(() => setHour(new Date().getHours()))
	const nextHour = new Date().getHours()
	useEffect(() => {
		const timerID = setInterval(() => tick(), 1000);
		return function cleanup() {
			clearInterval(timerID);
		};
	});

	function tick() {
		if (nextHour == new Date().getHours()) return 
		preloadImage()
	}

	const preloadImage = () => {
		const img = new Image();
		img.src = setHour(new Date().getHours())
		img.onload = () => setImg(img.src);
}
	const onclickHandler = preloadImage
		
	return <div onClick={onclickHandler}
		className={styleComponent.bg + ' ' + `bg`}
		style={{ backgroundImage: `url(${image})` }} />		
}
