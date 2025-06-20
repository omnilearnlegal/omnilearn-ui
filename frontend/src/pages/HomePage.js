import React from 'react';
import { Button, Typography, Container } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function HomePage() {
  const navigate = useNavigate();

  return (
    <Container style={{ textAlign: "center", marginTop: "50px" }}>
      <Typography variant="h3">Welcome to OmniLearn AI</Typography>
      <Button variant="contained" onClick={() => navigate('/dashboard')}>
        Start Learning
      </Button>
    </Container>
  );
}

export default HomePage;
