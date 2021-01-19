import React,{useState,useEffect, useRef} from 'react'
import twStyles from '../stylesJs/styleComponent.js'
import * as storage from '../utils/storage.js'
import ContentEditable from "react-contenteditable";
function Navbar() {

	const [city, setCity] = useState(storage.get('city') ? storage.get('city') : 'Lvov'),
		[temp, setTemp] = useState(''),
		[weatherIco, setWeatherIco] = useState(''),
		[wind, setWind] = useState(''),
		[hum, setHum] = useState(''),
		[desc, setDesc] = useState(''),
		inputE3 = useRef(null)
	useEffect(async function getWeather() {
		if(city==' ') return
		try {
			const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=en&appid=57781f6b98433e378452bea1ff327bd2&units=metric`;
			const res = await fetch(url);
			const data = await res.json();
			setWeatherIco(`owf-${data.weather[0].id}`)
			setTemp(`${data.main.temp.toFixed(0)}°C`)
			setWind(`wind: ${data.wind.speed.toFixed(0)}m/s`)
			setHum(`humidity: ${data.main.humidity}%`)
			setDesc(data.weather[0].description)
		} catch (err) {
			// перехватит любую ошибку в блоке try: и в fetch, и в response.jso
		return	setCity('[enter City]')
		}
	})
	const cityHandler = (e) => {
		storage.set('city', e.target.value)
		console.log(storage.get('city'))
	},
		setBlur = () => setCity(storage.get('city')),
		setFocus = () => setCity(' '),
		setKeyDown = (e) => {
			if (e.keyCode == 13) {
				e.preventDefault()
			inputE3.current.blur()
			}
			if (e.keyCode == 27) inputE3.current.blur();

		};

	return (
		<header className={twStyles.navbar.box}  onClick={()=>inputE3.current.focus()}>
			
				<ContentEditable
					html={city}
				tabIndex={4}
				innerRef={inputE3}
				onChange={cityHandler}
				onBlur={setBlur}
				onFocus={setFocus}
				onClick={() => inputE3.current.focus()}
				className='focus:bg-red-400 min-w-fun text-center'
				onKeyDown={setKeyDown}
				/>
		
		<div>{temp}</div>
			<i className={`font-ico w-m-min  text-ico owf owf-200 weather-icon ${weatherIco}`}></i>
			<div>{wind }</div>
		<div>{hum}</div>
		<div>{desc}</div>

		</header>
	)
}

export default Navbar
