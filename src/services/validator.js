import React from 'react';
import { isEmail } from 'validator'

export const required = (value, props) => {

    if (!value || (props.isCheckable && !props.checked)) {
      return <span style={{color:'red'}}>This field is required</span>
    }
}

export const stringLimit = (limit)=>(value,props) =>{
    if(value){
        if(value.length>0 && value.length>limit)
            return <span style={{color:'red'}}>Limit of characters (max {limit}) exceeded.</span>
        }
}

export const stringLowerLimit = (limit)=>(value,props) =>{
if(value.length<limit )
    return <span style={{color:'red'}}>Minimum {limit} characters required. </span>
}

export const email = (value) => {
    if(value){
      if (!isEmail(value)) {
        return <span style={{color:'red'}}><b>{value}</b> is not a valid email.</span>
      }
    }
  }