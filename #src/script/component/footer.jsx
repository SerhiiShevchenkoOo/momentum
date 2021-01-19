import React,{useState} from 'react'
import twStyles from '../stylesJs/styleComponent.js';
import logo from '../../assets/images/book.svg'
import arrow from '../../assets/images/arrow.svg'
function Footer() {
	const [quote, setQuote] = useState(`Consider that not only do negative thoughts and emotions destroy our experience of peace, they also undermine our health.
`),
		[quoteAutor, setQuoteAutor] = useState('Buddha'),
		[loader, setLoad] = useState(false),
		[test, setTest] = useState(''),
		[activQuote, setActiveQuote] = useState(''),
		[arrowPosition, setArrowPosition] = useState('-translate-x-3/4  left-0 rotate-180')
	
	async function getQuote() {
		const proxyurl = "https://cors-anywhere.herokuapp.com/";
		const url = `https://cors-anywhere.herokuapp.com/https://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en`;
		try {
			setTest('scale-0 opacity-0	')
			setLoad(true)
			const res = await fetch(proxyurl+url);
			const data = await res.json();
			setQuote(data.quoteText)
			setQuoteAutor(data.quoteAuthor)
			
		} catch (err) {
			setQuote('error. please try soon')
			setQuoteAutor('')
		}
		setLoad(false)
setTest('')
	}

	const quoteVisable = () => {
		activQuote == ''
			?(	setActiveQuote('transform -translate-x-full'),
				setTimeout(() =>setArrowPosition('translate-x-full right-0 rotate-0 '),500))
			: (setActiveQuote(''),
			setTimeout(()=>setArrowPosition('-translate-x-3/4  left-0 rotate-180'),500))
	}
	return (
		<footer className={`${twStyles.footer.box}`}>
			<div className={`${twStyles.footer.content} ${activQuote}`}>
			
				<figure className={`${test} ${twStyles.footer.figure}`}>
					<blockquote className={twStyles.footer.blockquote}>{quote}
					</blockquote >
					<figcaption className={twStyles.footer.figcaption}>
						{quoteAutor}
					</figcaption>
				</figure>
				<button className={twStyles.logo}  >
					{loader ? <div className="lds-ripple cursor-wait transition duration-200"><div></div><div></div></div>
						: <img className='h-spinner w-spinner' src={logo} alt={logo} onClick={getQuote} />}
				
				</button>
				<img className={`${twStyles.footer.arrow} ${arrowPosition} `} src={arrow} alt={arrow}
				onClick={quoteVisable} tabIndex={4}
				/>

			</div>
	</footer>
	)
}

export default Footer


