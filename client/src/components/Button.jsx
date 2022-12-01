import React from 'react'

function Button({method,postId,label}) {
  return (
    <button onClick={() => method(postId)}>{label}</button>
  )
}

export default Button;