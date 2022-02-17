import React from 'react'
import { FontAwesomeIconProps,FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'
export const Stuff = ({elem,sendLeft,index,props,sendRight}) => {
    const lineStyle ={
        display: "flex",
       justifyContent: "space-between",
       textAlign: "center"
      }
      const left={
        color:"rgb(20, 149, 158)",
     
      }
      const right={
          color:"rgb(20, 149, 158)",
          
          
      }
   if(props==="Winnie"){
       left.color="rgb(0, 0, 0)"
   }
   if(props==="Thomas"){
    right.color="rgb(0, 0, 0)"
   }
  return (
    <div style={lineStyle}>
      <button onClick={()=>{sendLeft(props,index)}} style={left} className='btn'><FontAwesomeIcon className='btn' icon={faAngleLeft}/></button>
      <p> {elem} </p>
      <button onClick={()=>{sendRight(props,index)}} style={right} className='btn'><FontAwesomeIcon className='btn' icon={faAngleRight}/></button>
      </div>
  )
}
