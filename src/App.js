import React, { useMemo, useState } from 'react'
import './App.css'
const App = () => {
  const[Height , setHeight] = useState(180);
  const[Weight , setWeight] = useState(70);
  function onWeightChange(event)
  {
    setWeight(event.target.value)
    console.log(Weight);
  }
  function onHeightChange(event)
  {
    setHeight(event.target.value)
    console.log(Height);

  }
  const output = useMemo(() =>{
    const calculateHeight = Height / 100;
    return (Weight/ (calculateHeight * calculateHeight)).toFixed(1)

  },[Weight , Height]);

   return (
    <div>
      <h1>Project 4: BMI Calculator</h1>
      <div className='input-section'>
        <p className='slider-output'>Weight: {Weight} Kg</p>
        <input className='input-slider'
        type='range'
        step="1"
        min="40"
        max="200"
        onChange={onWeightChange}
        />
        <p className='slider-output'> Height:
          {Height} Cm</p>
        <input className='input-slider'
        type='range'
        onChange={onHeightChange}
        min="140"
        max="220"
        />
      </div>
      <div className='output-section'>
        <p>Your BMI is </p>
        <p className='output'> {output}</p>
      </div>

      </div>
  )
}

export default App
