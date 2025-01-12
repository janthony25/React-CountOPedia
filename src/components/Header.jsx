import React from 'react'
import reactLogo from "../images/react.png"

export default function Header() {
  return (
    <header className='d-flex align-items-center'>
        <img src={reactLogo} alt="React logo" />
        <h2 className='ms-2'>ContOpedia</h2>
    </header>
  )
}
