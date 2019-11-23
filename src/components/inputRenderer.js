import React from 'react';
export const SaInputRender = ({input,label,type,placeholder,meta: { touched, error, warning }}) =>
{

  const Classname= `form-group ${touched?(error? 'has-danger':''):""}`
  return(

    <div style={{"marginBottom":"20px"}} className={Classname}> 
      <label style={{"marginBottom":"0px"}}>{label}</label><br/>
      <input {...input} placeholder={placeholder} type={type} className="form-control"/>
      {touched && ((error &&
              <span>
                {error}
              </span>) ||
              (warning &&
                <span>
                  {warning}
                </span>))}
                </div>
  )}