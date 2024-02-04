"use client"
import React, { useState } from "react"


export default function Home() {

  const[ height , setHeight] = useState("");
  const[ weight , setWeight] = useState("");
  const[ bmi , setBmi] = useState(null);
  const[ status , setStatus] = useState("");

  const CalculateBMI = () => {
    if (height && weight) {
      const heightinmeters = height/100 ;
      const bmivalue = weight / (heightinmeters * heightinmeters)
      if(bmivalue < 18.5){
        setStatus("underweight")
      }
      else if(bmivalue < 24.9){
        setStatus("Normal weight")
      }
      else if(bmivalue < 30){
        setStatus("overweight")
      }
      else{
        setStatus("obese")
      }
      setBmi(bmivalue.toFixed(2))
    }
    else{

    }
  }
  return (
    <div className="container flex justify-center items-center  "> 
      <div className="image bg-black h-80 w-56 mr-5">      </div>
      <div className="Details">
        <h1 className="text-2xl font-bold text-red-600 flex justify-center mb-5">BMI Calculator</h1>
        <div className="flex flex-col justify-center items-center">
          <div className="mb-3">
            <label htmlFor="height" >Height (cm)</label>
            <input type="text" id="height" className=" ml-2 border rounded-lg p-2" onChange={(e) => setHeight(e.target.value)}></input>
          </div>
          <div className="mb-5">
            <label htmlFor="weight" >Weight (cm)</label>
            <input type="text" id="weight"  className=" ml-2 border rounded-lg p-2" onChange={(e) => setWeight(e.target.value)}></input>
          </div>
          <button className="border rounded-md mb-4 bg-red-600 p-2 hover:px-4 hover:text-white hover:font-semibold" onClick={CalculateBMI}>Calculate</button>
        </div>
        <div className="status">
          <p>your BMI : {bmi} </p>
          <p>Status : {status}</p>
        </div>
        
      </div>
    </div>

  )
}
