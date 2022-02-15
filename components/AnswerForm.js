import { useState } from "react"

const AnswerForm = function ({ accounts, setAnswers, isLoggedIn }) {
  const [message, setMessage] = useState("")

  const post = async function (event) {
    event.preventDefault()
    
    setAnswers(current => {
      return [...current, {
        reply: message,
        account: "0xb25bf3990c5a274a758a2a3a4cc90b3e407eaaf4"
      }]
    })

    setMessage("")

    
  }

  return (
    <form onSubmit={post} className="answer-form">
      <textarea 
        placeholder="Please be nice and courteous in your answers!" 
        value={message} 
        onChange={e => setMessage(e.target.value)}>  
      </textarea>
      
      <button disabled={!isLoggedIn}>Reply</button>
    </form>
  )
}

export default AnswerForm