import React from 'react'
import { useAuthContext } from 'contexts/AuthContext'
import { Link } from 'react-router-dom'

export default function Hero() {
  const { user } = useAuthContext()
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            <h1 className="text-center">Dashboard Home</h1>
            <h2 className="text-center">Welcome Back {user.fullName}</h2>
            <Link to="/" className='btn btn-primary'>Home</Link>
          </div>
        </div>
      </div>
    </>
  )
}
