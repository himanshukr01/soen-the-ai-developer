import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from '../config/axios';
import { UserContext } from '../context/user.context';


const Login = () => {
  

  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState('');

  

  const navigate = useNavigate();

  function submitHandler(e) {
    e.preventDefault();
    axios.post('/users/login', { email, password, user })
    .then((res) => {
      console.log(res.data);

      localStorage.setItem('token', res.data.token);
      setUser(res.data.user);

      navigate('/');
    }).catch((err) => {
      console.log(err.response.data);
    })
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-gray-900 to-gray-800 px-6">
      <div className="bg-gray-700 p-12 rounded-2xl shadow-2xl w-full max-w-lg border border-gray-600">
        <h2 className="text-4xl font-bold text-white mb-10 text-center">Login</h2>
        <form onSubmit={submitHandler} className="space-y-8">
          <div className="space-y-4">
            <label className="block text-gray-300 text-lg font-semibold" htmlFor="email">
              Email Address
            </label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              id="email"
              required
              className="w-full p-5 text-lg rounded-xl bg-gray-800 text-white focus:outline-none focus:ring-4 focus:ring-blue-500 border border-gray-600"
              placeholder="Enter your email"
            />
          </div>
          <div className="space-y-4">
            <label className="block text-gray-300 text-lg font-semibold" htmlFor="password">
              Password
            </label>
            <input
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              id="password"
              required
              className="w-full p-5 text-lg rounded-xl bg-gray-800 text-white focus:outline-none focus:ring-4 focus:ring-blue-500 border border-gray-600"
              placeholder="Enter your password"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-4 text-lg rounded-xl font-semibold hover:bg-blue-700 transition duration-300 shadow-lg"
          >
            Login
          </button>
        </form>
        <p className="text-gray-300 mt-8 text-center text-lg">
          Don't have an account? 
          <Link to="/register" className="text-blue-400 hover:underline ml-1">Sign Up</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;