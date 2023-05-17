import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { TextField } from '@mui/material';
import Logo from '../../common/Logo/Logo';

export default function ForgotPassword() {
  const handleSubmit = (event: { preventDefault: () => void; currentTarget: HTMLFormElement | undefined; }) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
    });
  };

  return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
            <Logo />
          <Typography component="h1" variant="h5">
            Reset your password?
          </Typography>
          <Typography variant="body2" mt={2}>
            Please provide the username or email address that you used when you signed up for your MindTeams account.
            We will send you an email that will allow you to reset your password.
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              variant="filled"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={(theme) => ({
                padding: "10px",
                borderRadius: "10px",
                background: theme.palette.primary.main,
                mt: 3,
                mb: 2,
              })}
            >
              Send Verification Email
            </Button>
          </Box>
        </Box>
      </Container>
  );
}
