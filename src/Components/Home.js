import React from 'react'
import './css/Home'

export default function Home({ children }) {
  return (
    <div  className="container-fluid  border border-muted pt-5 mt-5 col-lg-8 offset-lg-2">
      {children}
    </div>
  )
}
