import React, { useState } from 'react';

function Calculadora() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] =useState("")
  const [formula, setFormula] =useState("")
  const [result, setResult]= useState(Number)


  const Numeros = (num)=>{
    if(formula===""){
      setNum1(num1+num)
    } else{
      setNum2(num2+num)
    }
    
  }
  
  const Resultado =()=>{
    const numero1 = Number(num1)
    const numero2 = Number(num2)
    switch(formula){
      case  '-':

      return setResult(numero1 - numero2)
      break; 
      case  '+':

      return setResult(numero1 + numero2)
      break; 

      case  '*':

       return setResult(numero1 * numero2)
        break; 
        case  '/':

       return setResult(numero1 / numero2)
        break; 
        
        
    }
     console.log(num1,num2,result,formula);
  }
  const clear = ()=>{
    setNum1("")
    setNum2("")
    setFormula("")
    setResult(0)
  }

  const mistake = ()=>{
    if(formula===""){
      setNum1(num1.toString().slice(0,-1))
    }else{
      setNum2(num2.toString().slice(0,-1))
    }
  }
  return <div className='principal'>
      <div id="display">
          <div>{formula?num1+formula:''}</div>
          <div>{result? result : (!formula?num1:num2)}</div>
      </div>
      <div className='contenedorBtns'>
      <button onClick={clear} id="clear">C</button>
      <button onClick={mistake} id="mistake">{"<--"}</button>
      <button onClick={()=>{setFormula("/")}} id="divide">/</button>
      <button onClick={()=>{Numeros(1)}} id="one">1</button>
      <button onClick={()=>{Numeros(2)}} id="two">2</button>
      <button onClick={()=>{Numeros(3)}} id="three">3</button>
      <button onClick={()=>{Numeros(4)}} id="four">4</button>
      <button onClick={()=>{Numeros(5)}} id="five">5</button>
      <button onClick={()=>{Numeros(6)}} id="six">6</button>
      <button onClick={()=>{Numeros(7)}} id="seven">7</button>
      <button onClick={()=>{Numeros(8)}} id="eight">8</button>
      <button onClick={()=>{Numeros(9)}} id="nine">9</button>
      <button onClick={()=>{Numeros(0)}} id="zero">0</button>
      <button onClick={()=>{setFormula("*")}} id="multiply">*</button>
      <button onClick={()=>{setFormula("-")}} id="subtract">-</button>
      <button onClick={()=>{setFormula("+")}} id="add">+</button>
      <button onClick={Resultado} id='equals'>=</button>
      <button id="decimal">.</button>
      </div>
  </div>;
}

export default Calculadora;
