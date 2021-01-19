import React from 'react'
import ReactDOM from 'react-dom'
import Navbar from './component/navbar.jsx'
import Main from "./component/mainInfo.jsx"
import Footer from "./component/footer.jsx";
import ScreenBg from './component/screenBg.jsx'

//import PropsTypes from 'prop-types'
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"



function App(){
  return (
    <>
      <Navbar />
      <Main />
      <Footer />
      <ScreenBg />
    </>
  );
}

ReactDOM.render(<App/>, document.getElementById("root"));