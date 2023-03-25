import { useState } from "react"

function FeedbackItem() {
    const [rating, setRating] = useState(10)
    const [text, setText] = useState('Feedback Item example')

    const handleClick = () => {
        setRating((prev) => {
            return prev + 1
        })
    }

  return (
    <div className="card">
        <div className="num-display">{rating}</div>
        <div className="text-display">{text}</div>
        <button onClick={handleClick}>Click</button>
    </div>
  )
}

export default FeedbackItem