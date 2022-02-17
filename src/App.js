import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { Box } from './Components/Box';

function App() {
  const prop=()=>{
    const value=prompt("What to do next?")
    return value;
  }
  const inputValue=(val)=>{
   var value=prop();
    
    if(value===""){
     alert("Please enter some value")
      return;
    }if(value===null){
      console.log("Add Data cancelled")
      return;
    }
   if(val==="Winnie"){
   setWinnie(prevValue=>[...prevValue,value])
  }else if(val === "Brad"){
    setBrad(prevValue=>[...prevValue,value])
  }else if(val === "Bob"){
    setBob(prevValue=>[...prevValue,value])
  }else{
    setThomas(prevValue=>[...prevValue,value])
  }
}
  const sendLeft=(val,index)=>{
    if(val==="Winnie"){
     console.log("Doesn't work");
    }else if(val === "Brad"){
     let value=brad[index];
     setBrad(brad.filter((e)=>{
      return e!==value;
    }))
    if(winnie.length>index){
      setWinnie([...winnie.slice(0,index),value,...winnie.slice(index,winnie.length) ])
    }else{
      setWinnie(prevValue=>[...prevValue,value])
    }
    
     }else if(val === "Bob"){
      let value=bob[index];
      setBob(bob.filter((e)=>{
       return e!==value;
     }))
     if(brad.length>index){
       setBrad([...brad.slice(0,index),value,...brad.slice(index,brad.length) ])
     }else{
       setBrad(prevValue=>[...prevValue,value])
     }
     }else{
      let value=thomas[index];
      setThomas(thomas.filter((e)=>{
       return e!==value;
     }))
     if(bob.length>index){
       setBob([...bob.slice(0,index),value,...bob.slice(index,bob.length) ])

     }else{
       setBob(prevValue=>[...prevValue,value])
     }
     } 
  }
  const sendRight=(val,index)=>{
    if(val==="Winnie"){
      
      let value=winnie[index];
       setWinnie(winnie.filter((e)=>{
        return e!==value;
      }))
      if(brad.length>index){
        setBrad([...brad.slice(0,index),value,...brad.slice(index,brad.length) ])
 
      }else{
        setBrad(prevValue=>[...prevValue,value])
      }
     }else if(val === "Brad"){
      let value=brad[index];
      setBrad(brad.filter((e)=>{
       return e!==value;
     }))
     if(bob.length>index){
       setBob([...bob.slice(0,index),value,...bob.slice(index,bob.length) ])
     }else{
       setBob(prevValue=>[...prevValue,value])
     }
     
      }else if(val === "Bob"){
       let value=bob[index];
       setBob(bob.filter((e)=>{
        return e!==value;
      }))
      if(thomas.length>index){
        setThomas([...thomas.slice(0,index),value,...thomas.slice(index,thomas.length) ])
      }else{
        setThomas(prevValue=>[...prevValue,value])
      }
      }else{
        console.log("Doesn't work");
      }  
  }
   
  
   const [winnie, setWinnie] = useState([]);
   const [brad, setBrad] = useState([]);
   const [bob, setBob] = useState([]);
   const [thomas, setThomas] = useState([]);
  const elements=["Winnie","Brad","Bob","Thomas"];
  return (
    <>
     <div className='flex-container'>
     {elements.map((value) => {
        if(value==="Winnie"){
          return(<Box key={0} sendRight={sendRight} sendLeft={sendLeft} props={value} list={winnie} inputValue={inputValue}/>)    
        }else if(value === "Brad"){
          return(<Box key={1}  sendRight={sendRight} sendLeft={sendLeft} props={value} list={brad}  inputValue={inputValue}/>)
        }else if(value === "Bob"){
          return(<Box key={2}  sendRight={sendRight} sendLeft={sendLeft} props={value} list={bob}  inputValue={inputValue}/>)
        }else{
          return(<Box key={3}  sendRight={sendRight}  sendLeft={sendLeft} props={value} list={thomas}  inputValue={inputValue}/>)
        }


       
     })}</div>   
    </>
  );
}

export default App;
