import React from 'react'
import QuoteBtn from './QuoteBtn'

const QuoteBox = ({quote, newValues, textColor ,  bgColor}) => {
  return (
    <article className='card'>
      <i className='bx bxs-quote-alt-left' style={textColor}></i>
      <p style={textColor}> {quote.quote}</p>
      <h2 style={textColor}>{quote.author}</h2>
      <QuoteBtn newValues={newValues} bgColor={bgColor} textColor={textColor} />
    </article>

  )
}

export default QuoteBox