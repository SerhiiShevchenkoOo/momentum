import React, { useEffect, useState, useRef } from "react";
import * as storage from "../utils/storage";
import PropTypes from "prop-types";
import ContentEditable from "react-contenteditable";

function InputInfo(props) {
	useEffect(() => {
		if (text == ''|| text==storage.get(props.inputText)) return 
		
	storage.set(props.inputText, text);
	
	
	});
	const [text, setText] = useState(
		storage.get(props.inputText)
			? storage.get(props.inputText)
			: props.inputText
	),
		handlerText = (event) => setText(event.target.value),
		setBlur = () =>  setText(storage.get(props.inputText)),
		toFocus = () => setText(""),
		setKeyDown = (e) => {
			if (props.check && e.keyCode == 13) {
				e.preventDefault()
				props.myRef.current.blur()
			}
				if (e.keyCode == 27) props.myRef.current.blur();
			
		};
	return (
		<ContentEditable
			html={text}
			onKeyDown={setKeyDown}
			tabIndex={props.id}
			innerRef={props.myRef}
			onChange={handlerText}
			className={props.className}
			onFocus={toFocus}
			onBlur={setBlur}
			
		/>
	);
}
InputInfo.propTypes = {
	inputText: PropTypes.string.isRequired,
};

export default InputInfo