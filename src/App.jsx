import React from 'react'
import './App.css'

function App() {

  return (
    <>
      <div className="top-left">
        {/* Change the text to your name  */}
        <h1>thisisnotfez</h1>
        {/* Fix this CSS so that way these sits under your Name */}
        <p>Short description of thyself. This doesn&apos;t have to be long. 3 to 5 sentences at most.</p>
        <p>I am very uncomfortable with this new way of doing things. Only makes the challenge that much better. I like to eat Haleem.</p>
        <p>Hobbies. This doesn&apos;t have to be long. Maybe make a list?</p>
        <ul>
          <li>3D Printing</li>
          <li>Vidya Gaym</li>
          <li>Enjoying the company of my kids</li>
        </ul>
      </div>

      {/* Change the div's font to 18px and the color to aliceblue */}
      <div className="center-left">
        <p>What are your likes and dislikes?</p>
      </div>
    </>
  )
}

export default App
