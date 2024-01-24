import React, { useState } from 'react';
import axios from 'axios';
import { Button, TextField, Typography } from '@mui/material';

const Login: React.FC = () => {
  const [name, setName] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.post("http://biubiu-3fb0e2105d16.herokuapp.com/sessions", { name });
      console.log(response.data);
      // Redirect or show success message
    } catch (error: any) {
      console.error(error.response.data);
      // Handle login error
    }
  };

  return (
    <div>
      <Typography variant="h4">Login</Typography>
      <TextField label="Name" variant="outlined" value={name} onChange={(e) => setName(e.target.value)} />
      <Button variant="contained" color="primary" onClick={handleLogin}>
        Login
      </Button>
    </div>
  );
};

export default Login;