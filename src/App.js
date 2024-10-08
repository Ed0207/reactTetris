import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import {createRoot} from 'react-dom/client'
import SquareSVG from './Square.js';

function App() {

    function handleEvent(event){
      
      switch(event.key){
        case "w":
          setY(y -= 10)
          break;
        case 'a':
          setX(x -= 10)
          break;
        case "s":
          setY(y += 10)
          break;
        case 'd':
          setX(x += 10)
          break;
        default:
          break;
      }

    }

    const timerEvent = setInterval(() =>{
        setY(y += 20)
      }, 1000)
    

  console.log("App loaded")

  // state hook so it will be re-render everytime setString is called
  let [string, setString] = useState("hi!")
  let [timer, setTimer] = useState(1000);
  let [x, setX] = useState(0);
  let [y, setY] = useState(0);

  // useEffect executes function after rendering
  useEffect(() =>{

    console.log("use effect")

    const inputBox = document.getElementById("inputBox")
    console.log(inputBox)
    
    document.addEventListener("keydown", handleEvent)

    // remove listener in the end to prevent extra listener on each re-render
    return () =>{
      document.removeEventListener("keydown", handleEvent)
      clearInterval(timerEvent)
    }
  })

   
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <SquareSVG x={x} y={y} w="500" h="500"></SquareSVG>
        <h4 className='inputComponenet'>{string}</h4>
      </header>
    </div>
  );
}

export default App;
