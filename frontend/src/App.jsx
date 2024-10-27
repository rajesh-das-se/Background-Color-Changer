import { useState } from 'react'
import './App.css'

function App() {
  

  return (
    <>
      <div className="m-0 w-full h-full">
        <div className="fixed bottom-10 flex justify-center w-full">
          <button className='p-2 border-3 border-black border-solid'>Black</button>
          <button className='p-2'>Red</button>
          <button className='p-2'>White</button>
          <button className='p-2'>Blue</button>
          <button className='p-2'>Yellow</button>
        </div>
      </div>
    </>
  )
}

export default App
