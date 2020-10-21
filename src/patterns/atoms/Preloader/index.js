import React from 'react';
import './Preloader.scss'

const Preloader = ({ children = null, isLoading = true, type = 'ringlete' }) => {

  const styleTypes = {
    ringlete: () => <div className="ringlete-loader" />
  }

  return (
    <>
      {isLoading ? styleTypes[type]() : children}
    </>
  )
}

export default Preloader;