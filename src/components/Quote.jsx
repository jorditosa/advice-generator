import { useState, useEffect } from "react"
import Loading from './Loading'

function Quote() {

  const [ quote, setQuote ] = useState('')
  const [ loading, setLoading ] = useState(true)

  const getQuote = async () => {

    const res = await fetch('https://api.adviceslip.com/advice');
    const data = await res.json();
    setQuote(data.slip)
  }

  useEffect(() => {
    getQuote()
  }, [])

  return (

    <>
      {quote === '' ? <Loading /> : (
        <div>
          <h3 className="quote-title">advice #{quote.id}</h3>
          <p className="quote">{quote.advice}</p>
        </div>
      )}
      
    </>
  )
}

export default Quote