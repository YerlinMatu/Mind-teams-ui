import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { CreateAccountDto } from '../../../interfaces';
 
export default function Accounts() {
  const navigate = useNavigate();

  const handleSubmit = (event: { preventDefault: () => void; currentTarget: HTMLFormElement | undefined; }) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const accountDto: CreateAccountDto = {
      name: data.get('name') as string,
      clientName: data.get('clientName') as string,
      operationManagerName: data.get('operationManagerName') as string,
    };
    console.log(accountDto);
    setTimeout(() => {
      navigate('/accounts');
    }, 1000);
  }

  return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 16,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography component="h1" variant="h5">
            Add Account
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              name="name"
              label="Name"
              type="text"
              id="name"
              autoComplete="off"
              variant="filled"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="clientName"
              label="Client Name"
              type="text"
              id="clientName"
              autoComplete="off"
              variant="filled"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="operationManagerName"
              label="Operation Manager Name"
              type="text"
              id="operationManagerName"
              autoComplete="off"
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
              Save
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/accounts" variant="body2">
                  Back to Accounts
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
  );
}
