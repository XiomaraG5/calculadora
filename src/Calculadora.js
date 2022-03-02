import React, { useState } from 'react';

function Calculadora() {
  const [num1, setNum1] = useState("");
  // const [num2, setNum2] =useState("")
  // const [formula, setFormula] =useState("")
  const [result, setResult]= useState(Number)

  const clear = ()=>{
    setNum1("")
    setResult(0)
  }

  const mistake = ()=>{
   
      setNum1(num1.toString().slice(0,-1))
   
  }
 const formula= ['/','*','+',"-"]
const operation= num=>{
  if(num==="-"){
        
          setNum1(num1+num)
        
  }else  if(num=="."){

    let point
   
      
      point = num1.split("/")
      point = num1.split("-")
      point = num1.split("+")
      point = num1.split("*")
     
      if(point[point.length-1].toString().indexOf(".")==-1 && num1 !=="") {
        if(formula.includes(num1.slice(0,-1))){return}
        else{
          setNum1(num1+num)}
      }
      
      console.log(point[point.length-1]);
    }
  // }else if ( formula.includes(num) &&num1.toString()[num1.toString().length-1]==="-"   ) {setNum1(num1.toString().slice(0,-1)+num)}
  else if( formula.includes(num) && num1==="" ){return}
        else  if(formula.includes(num1.slice(0,-1))&& formula.includes(num)){
          setNum1(num1.toString().slice(0,-1)+num)
        
    // formula.includes(num) && num1==="" || formula.includes(num1.slice(-1))&& formula.includes(num)){return;
  }else if(num1==="0"){
    if(num !=="0" ||num1 =="0."){
    setNum1(num1+num)
    }
    
  }else if(num1==="0.0"){
    if(num ==="0"){return}
    else{setNum1(num1+num)}
  }else{setNum1(num1+num)}
    
}
const total =()=>{
  setResult(eval(num1))
  console.log(result);
}
  return <div className='principal'>
      <div >
      <input  id="display" value={result?result:num1||"0"} readOnly />
      </div>
      <div className='contenedorBtns'>
      <button onClick={clear} id="clear">C</button>
      <button onClick={mistake} id="mistake">{"<--"}</button>
      <button onClick={()=>{operation("/")}} id="divide">/</button>
      <button onClick={()=>{operation("1")}} id="one">1</button>
      <button onClick={()=>{operation("2")}} id="two">2</button>
      <button onClick={()=>{operation("3")}} id="three">3</button>
      <button onClick={()=>{operation("4")}} id="four">4</button>
      <button onClick={()=>{operation("5")}} id="five">5</button>
      <button onClick={()=>{operation("6")}} id="six">6</button>
      <button onClick={()=>{operation("7")}} id="seven">7</button>
      <button onClick={()=>{operation("8")}} id="eight">8</button>
      <button onClick={()=>{operation("9")}} id="nine">9</button>
      <button onClick={()=>{operation("0")}} id="zero">0</button>
      <button onClick={()=>{operation("*")}} id="multiply">*</button>
      <button onClick={()=>{operation("-")}} id="subtract">-</button>
      <button onClick={()=>{operation("+")}} id="add">+</button>
      <button onClick={total} id='equals'>=</button>
      <button onClick={()=>{operation(".")}} id="decimal">.</button>
      </div>
  </div>;
}

export default Calculadora;
