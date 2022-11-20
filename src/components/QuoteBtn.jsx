import React from 'react'

const QuoteBtn = ({newValues, bgColor}) => {
  
  return (
    <button className='change_btn' onClick={newValues} style={bgColor}><i className='bx bx-transfer-alt' ></i> <p>Change Quote</p></button>
  )

}

export default QuoteBtn