import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'

export default function Index() {
    return (
        <Routes>
            <Route index element={<Home />} />
            {/* <Route path='register' element={<Register />} />
            <Route path='forgot-password' element={<ForgotPassword />} />
            <Route path='reset-password' element={<ResetPassword />} /> */}
            <Route path="*" element={<h1>404</h1>} />
        </Routes>
    )
}