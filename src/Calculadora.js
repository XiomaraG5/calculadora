import React, { useState } from 'react';

function Calculadora() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] =useState("")
  const [formula, setFormula] =useState("")
  const [result, setResult]= useState(0)


  const Numeros = (num)=>{
    if(formula===""){
      setNum1(num1+num)
    } else{
      setNum2(num2+num)
    }
    
  }
  const tipoOperacion = (ope) =>{
    setFormula(ope)
  }
  const resultado =()=>{
    switch(tipoOperacion){
      case  "-":
        setResult(Number(num1) + Number(num2))
        break; 
    }
     console.log(num1,num2,result);
  }
  return <div className='principal'>
      <div id="display">
          <div>{formula?num1+formula:''}</div>
          <div>{result? result : (!formula?num1:num2)}</div>
      </div>
      <div className='contenedorBtns'>
      <button id="clear">C</button>
      <button id="mistake">{"<--"}</button>
      <button onClick={()=>{tipoOperacion("/")}} id="divide">/</button>
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
      <button onClick={()=>{tipoOperacion("*")}} id="multiply">X</button>
      <button onClick={()=>{tipoOperacion("-")}} id="subtract">-</button>
      <button onClick={()=>{tipoOperacion("+")}} id="add">+</button>
      <button onClick={resultado} id='equals'>=</button>
      <button id="decimal">.</button>
      </div>
  </div>;
}

export default Calculadora;