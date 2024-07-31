import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'


function Register() {
  const [name , setName] = useState('')
  const [email , setEmail] = useState('')
  const [password , setPassword] = useState('')

  async function registerUser(e){
    e.preventDefault();
    try {
      await axios.post('/register' , {
        name, 
        email,
        password,
      });
      alert('Registration Successfull . Now you can log in');
    } catch (error) {
      alert('Registration Failed. Please try again later .')
    }
  }

  return (
    <div className='mt-4 flex grow justify-around items-center'>
      <div className='mb-64'>
      <h1 className='text-4xl text-center mb-4'>Register</h1>
      <form className='max-w-md mx-auto' onSubmit={registerUser}>
        <input 
        type="text" 
        placeholder='John Doe' 
        value={name}
        onChange={e => setName(e.target.value)}
         />
        <input 
        type="email" 
        placeholder='your@email.com'
        value={email}
        onChange={e => setEmail(e.target.value)}
         />
        <input 
        type="password" 
        placeholder='password'
        value={password}
        onChange={e => setPassword(e.target.value)}
         />
        <button className='primary'>Register</button>
        <div className='mt-2 text-gray-500 text-center'>Already a member ?
          <Link className = "underline text-black" to={'/login'}> Login</Link>
        </div>
      </form>
      </div>
    </div>
  )
}

export default Register
