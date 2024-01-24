import React, { useState } from 'react';
import axios from 'axios';
import { Button, TextField, Typography } from '@mui/material';

const Register: React.FC = () => {
  const [name, setName] = useState('');

  const handleRegister = async () => {
    try {
      const response = await axios.post("http://biubiu-3fb0e2105d16.herokuapp.com/registrations", { user: { name } });
      console.log(response.data);
      // Redirect or show success message
    } catch (error: any) {
      console.error(error.response.data);
      // Handle registration error
    }
  };

  return (
    <div>
      <Typography variant="h4">Register</Typography>
      <TextField label="Name" variant="outlined" value={name} onChange={(e) => setName(e.target.value)} />
      <Button variant="contained" color="primary" onClick={handleRegister}>
        Register
      </Button>
    </div>
  );
};

export default Register;