import React, { useState } from 'react'
import { Button, DatePicker, Divider, Form, Input, Typography } from 'antd'
import { useAuthContext } from 'contexts/AuthContext'

const { Title } = Typography

export default function Login() {

  const { dispatch } = useAuthContext()
  const [state, setState] = useState({ fullName: "", email: "", password: "" })
  const [isProcessing, setIsProcessing] = useState(false)

  const handleChange = e => setState(s => ({ ...s, [e.target.name]: e.target.value }))

  const handleLogin = e => {
    e.preventDefault()

    let { fullName, email, password } = state

    const user = { fullName, email, password }
    setIsProcessing(true)

    setTimeout(() => {
      setIsProcessing(false)
      dispatch({ type: "SET_LOGGED_IN", payload: { user } })
      localStorage.setItem("user", JSON.stringify(user))
    }, 2000)
  }

  return (
    <main className='auth'>
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="card p-3 p-md-4">
              <Title level={2} className='m-0 text-center'>Login</Title>

              <Divider />

              <Form layout="vertical">
                <Form.Item label="Full Name">
                  <Input placeholder='Input your full name' name='fullName' onChange={handleChange} />
                </Form.Item>
                <Form.Item label="Email">
                  <Input placeholder='Input your email' name='email' onChange={handleChange} />
                </Form.Item>
                <Form.Item label="Password">
                  <Input.Password placeholder='Input your password' name='password' onChange={handleChange} />
                </Form.Item>
                <Form.Item label="Birth Date">
                  <DatePicker className='w-100' />
                </Form.Item>

                <Button type='primary' htmlType='submit' className='w-100' loading={isProcessing} onClick={handleLogin}>Login</Button>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
