import React from 'react'

function Button({method,postId,label,className}) {
  return (
    <button onClick={() => method(postId)} className={className}>{label}</button>
  )
}

export default Button;