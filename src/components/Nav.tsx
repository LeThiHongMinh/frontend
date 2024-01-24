import React, { useState } from 'react';
import { AppBar, Toolbar, Button, Dialog, DialogTitle, DialogContent, TextField, DialogActions } from '@mui/material';
import { Link } from 'react-router-dom';

interface NavProps {
  onLogin: (name: string) => void;
  onSignup: (name: string) => void;
}

const LoginDialog: React.FC<{ open: boolean; onClose: () => void; onSubmit: (name: string) => void }> = ({ open, onClose, onSubmit }) => {
  const [name, setName] = useState('');

  const handleSubmit = () => {
    onSubmit(name);
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Login</DialogTitle>
      <DialogContent>
        <TextField label="Name" variant="outlined" fullWidth onChange={(e) => setName(e.target.value)} />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="secondary">
          Cancel
        </Button>
        <Button onClick={handleSubmit} color="primary">
          Login
        </Button>
      </DialogActions>
    </Dialog>
  );
};

const SignupDialog: React.FC<{ open: boolean; onClose: () => void; onSubmit: (name: string) => void }> = ({ open, onClose, onSubmit }) => {
  const [name, setName] = useState('');

  const handleSubmit = () => {
    onSubmit(name);
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Sign Up</DialogTitle>
      <DialogContent>
        <TextField label="Name" variant="outlined" fullWidth onChange={(e) => setName(e.target.value)} />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="secondary">
          Cancel
        </Button>
        <Button onClick={handleSubmit} color="primary">
          Sign Up
        </Button>
      </DialogActions>
    </Dialog>
  );
};

const Nav: React.FC<NavProps> = ({ onLogin, onSignup }) => {
  const [openLogin, setOpenLogin] = useState(false);
  const [openSignup, setOpenSignup] = useState(false);

  const handleLogout = () => {
    // Implement logout logic if needed
  };

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Button color="inherit" onClick={() => console.log('Navigate to Discussions')}>
            Discussions
          </Button>
          {false /* Replace with actual user authentication check */}
          {true ? (
            <Button color="inherit" onClick={handleLogout}>
              Logout
            </Button>
          ) : (
            <>
              <Button color="inherit" onClick={() => setOpenLogin(true)}>
                Login
              </Button>
              <Button color="inherit" onClick={() => setOpenSignup(true)}>
                Sign Up
              </Button>
            </>
          )}
        </Toolbar>
      </AppBar>

      <LoginDialog open={openLogin} onClose={() => setOpenLogin(false)} onSubmit={onLogin} />
      <SignupDialog open={openSignup} onClose={() => setOpenSignup(false)} onSubmit={onSignup} />
    </div>
  );
};

export default Nav;