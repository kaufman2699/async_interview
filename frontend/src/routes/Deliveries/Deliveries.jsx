import React, { useState } from 'react';
import {
  useLoaderData,
  Form
} from "react-router-dom";
import { Add } from '@mui/icons-material';
import { Button, Container, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Fab, Stack, TextField } from '@mui/material';

import { useTitle } from '../useTitle';
import { Delivery } from './components/Delivery';

const Deliveries = () => {
  useTitle('Deliveries');
  
  const { deliveries } = useLoaderData();

  if (!deliveries) {
    return "Loading..."
  }

  return(
    <Container maxWidth="sm">
      <Stack
        direction="column"
        spacing={2}
      >
        {
          deliveries.map(delivery => <Delivery key={delivery} delivery={delivery} />)
        }
      </Stack>
    </Container>
  )
};

export { Deliveries };
