import React from 'react'

export default function Home({ children }) {
  return (
    <div className="container-fluid  border border-muted col-lg-8 offset-lg-2 col-sm-12g">
      {children}
    </div>
  )
}
