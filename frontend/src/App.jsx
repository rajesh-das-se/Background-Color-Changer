import { useState } from 'react'
import './App.css'

function App() {
  const [bgColor, setBgColor]=useState("white");
  const [buttonRibbonBgColor, setButtonRibbonBgColor]=useState("black");

  const colorChanger=(buttonColor)=>{
    setBgColor(buttonColor);
    if(buttonColor=="black"){
      setButtonRibbonBgColor("white");
    }else{
      setButtonRibbonBgColor("black");
    }
  }
  console.log(bgColor);
  return (
    <>
      <div className="m-0 p-0 w-screen h-screen" style={{backgroundColor: bgColor}}>
        <div className="fixed bottom-10 flex justify-center w-full" style={{backgroundColor: buttonRibbonBgColor}}>
          <button onClick={()=>{colorChanger("black")}} className='m-4 border-2 rounded-2xl w-20 h-8 bg-black text-white focus:opacity-50'>Black</button>
          <button onClick={()=>{colorChanger("red")}} className='m-4 border-2 rounded-2xl w-20 h-8 bg-red-600 focus:opacity-50'>Red</button>
          <button onClick={()=>{colorChanger("white")}} className='m-4 border-2 rounded-2xl w-20 h-8 bg-white border-yellow-600 focus:opacity-50'>White</button>
          <button onClick={()=>{colorChanger("blue")}} className='m-4 border-2 rounded-2xl w-20 h-8 bg-blue-600 focus:opacity-50'>Blue</button>
          <button onClick={()=>{colorChanger("yellow")}} className='m-4 border-2 rounded-2xl w-20 h-8 bg-yellow-500 focus:opacity-50'>Yellow</button>
        </div>
      </div>
    </>
  )
}

export default App
