import React from 'react'
import inputValue from '../App'
import '../App.css'
import { Stuff } from './Stuff'
export const Box = ({props,list,inputValue,sendLeft,sendRight}) => {
  let myStyle={
    backgroundColor:"red",
    color:"white",
    padding:"3%",
    margin:"0 0 0 0"
  }
  if(props==="Winnie"){
    myStyle.backgroundColor="purple"
  }else if(props==="Brad"){
    myStyle.backgroundColor="cyan"
  }else if(props==="Bob"){
    myStyle.backgroundColor="green"
  }else{
    myStyle.backgroundColor="orange"
  }

 
  return (
   <>
   
     <div className='flex-child'>
    <p style={myStyle}>{props}</p>
    {list.map((element) => {
      
      return(<>
      
      <Stuff key={list.indexOf(element)} index={list.indexOf(element)}sendLeft={sendLeft} sendRight={sendRight} props={props} elem={element}/>
       </>)
      
    })
    }
    <button onClick={()=>{inputValue(props)}}>+Add a task</button>
   </div>
   
   </>
  )
}
