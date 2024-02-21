import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../CSS/Register.css'; // Import your CSS file
import { useNavigate } from 'react-router-dom';

const Registration = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [fullName, setFullName] = useState('');
  const [otp, setOtp] = useState('');

  const navigate = useNavigate();

  
   
  

  const handleRegistration = async () => {

    const emailToValidate = email; 

 

    try {
      // Check email validity before registration
    

      // Assuming your registration API endpoint is at http://localhost:5000/register
      const response = await axios.post('http://localhost:5000/user/register', {
        userName: username,
        password: password,
        email: email,
        fullName: fullName,
      });

      // Check the response from the server
      setOtp(response.data.message);
      console.log(response.data.message);
      
    } catch (error) {
      console.error('Error during registration:', error);
      
    }
  };

  useEffect(() => {
    if(username && password && fullName){
      navigate('/otp',{state:{email,otp}});
    }
  },[otp]);

  return (
    <div className="flex justify-center items-center h-[100vh]">
      <div className="border p-16 rounded-3xl w-[30%]">
      <h2 className='text-center text-green-600 text-[110%] p-5'>Registration</h2>
      <label className='flex flex-col font-serif'>
        Username:
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="h-10 border-b border-b-black focus:outline-none focus:border-b-blue-400 "
        />
      </label>
      <br />
      <label className='flex flex-col font-serif'>
        Password:
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="h-10 border-b border-b-black focus:outline-none focus:border-b-blue-400"
        />
      </label>
      <br />
      <label className='flex flex-col font-serif'>
        Email:
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="h-10 border-b border-b-black focus:outline-none focus:border-b-blue-400"
        />
      </label>
      <br />
      <label className='flex flex-col font-serif'>
        Full Name:
        <input
          type="text"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          className="h-10 border-b border-b-black focus:outline-none focus:border-b-blue-400"
        />
      </label>
      <br />
      <button onClick={handleRegistration} className="registration-button">
        Register
      </button>
    </div>
    </div>
    
  );
  }

export default Registration;
