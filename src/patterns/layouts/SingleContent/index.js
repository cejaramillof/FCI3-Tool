import React from 'react';


const SingleContentLayout = props => {
  
  return (
    <div className="container d-flex h-100">
      <div className="d-flex flex-row w-100 justify-content-center align-self-center">
        {props.children}
      </div>
    </div>
  )
}
SingleContentLayout.SmallContent = props => <div className="col-6">{props.children}</div>

export default SingleContentLayout;

