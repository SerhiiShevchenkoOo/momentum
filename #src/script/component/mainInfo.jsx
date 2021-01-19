import React, { useRef } from "react";
import Clock from "./clock.jsx";
import useNewTimer from './useNewTimer.jsx'
import twStyles from '../stylesJs/styleComponent';
import InputInfo from './inputInfo.jsx'


function Main() {
	const hour =useNewTimer(new Date()).getHours(),
		greeteng = () => hour < 6? 'Good night!'
			: hour < 12 ? 'Good morning!'
				: hour < 19 ? 'Good day!'
					: 'Good evening!'

	const inputEl = useRef(null);
	const inputE2 = useRef(null);
	

	return (
		<main className={twStyles.main} >
			<Clock />
			
			<div id="1" className={twStyles.greetting.box} onClick={() => inputEl.current.focus()}>
				<span className={twStyles.greetting.greet}>{greeteng()},&nbsp;</span>
				<div className={twStyles.greetting.name}>
					
					<InputInfo check={true}
						inputText="[enter your name]" myRef={inputEl} />
				</div>
			</div>
			<div id="2" className={twStyles.todo.box}
				onClick={() => inputE2.current.focus()}>
				<span className={twStyles.todo.quote}> My todo:</span>
				<div className={twStyles.todo.todoText}>
					<InputInfo inputText="[enter your todo]" myRef={inputE2} className='min-w-fun  rounded-3xl p-1' />
				</div>
			</div>
		
		</main>
	);
}

export default Main;
