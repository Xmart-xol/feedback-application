import React from 'react'
import { useState } from 'react'
import Card from './shared/card'

function FeedbackItem({item}) {
    const [rating, setRating] = useState(7)
    const [text, setText] = useState('This is an example for feedback items')
  
  return (
    <Card>
        <div className="num-display">{item.rating}</div>
        <div className="text-display">{item.text}</div>
    </Card>
  )
}

export default FeedbackItem
