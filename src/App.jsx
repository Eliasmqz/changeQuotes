import quoteDb from "./db/quotes.json"
import colors from './db/colors.js';
import QuoteBox from "./components/QuoteBox";
import { useState } from "react";


function App() {

  const randomValues = (array)  => {
    return Math.floor(array.length * Math.random())
  }


  const [quote, setQuote] = useState(quoteDb[randomValues(quoteDb)])
  const [color, setColor] = useState(colors[randomValues(colors)])

  
  const newRandomValues = () => {
    
    const randomQuotes = () => {
      setQuote(quoteDb[randomValues(quoteDb)])
    }
  
    const randomColors = () => {
      setColor(colors[randomValues(colors)])
    }

    randomQuotes()
    randomColors()
  } 

  const bgColor = {
    backgroundColor: color
  }

  const textColor = {
    color: color
  }
  return (
    <div className="App" style={bgColor}>
      <QuoteBox quote = {quote}
      newValues = {newRandomValues}
      textColor = {textColor}
      bgColor = {bgColor} />
    </div>
  )
}

export default App
