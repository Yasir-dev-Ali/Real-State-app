import React from 'react'
import { useState } from 'react';

const Login = () => {
    const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();

    // Add your login logic here
    console.log('Login clicked with:', { username, password });
  };
  return (
   <>
   
   <div class="bg-white p-8 rounded shadow-md w-96">
        <h2 class="text-2xl font-semibold mb-6">Login</h2>

        <form onSubmit={handleLogin}>
            <div class="mb-4">
                <label for="username" class="block text-gray-600 text-sm font-medium mb-2">Username</label>
                <input type="text" id="username" name="username" class="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500" value={username} onChange={(e) => setUsername(e.target.value)}/>
            </div>

            <div class="mb-4">
                <label for="password" class="block text-gray-600 text-sm font-medium mb-2">Password</label>
                <input type="password" id="password" name="password" class="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500" value={password} onChange={(e) => setPassword(e.target.value)}/>
            </div>

            <button type="submit" class="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Login</button>
        </form>
    </div>
   </>
  )
}

export default Login
