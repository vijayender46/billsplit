import React from 'react'
import { Link } from 'react-router-dom'

export default function NoPage() {
  return (
    <div>
        <h1>No Page Found</h1>
        <Link to='/'>Back to Homepage</Link>
    </div>
  )
}
