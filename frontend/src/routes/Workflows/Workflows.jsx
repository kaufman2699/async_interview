import React, { useState } from 'react';
import {
  useLoaderData,
  Form
} from "react-router-dom";
import { Add } from '@mui/icons-material';
import { Button, Container, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Fab, Stack, TextField } from '@mui/material';

import { Workflow } from "./components/Workflow";
import { useTitle } from '../useTitle';

const Workflows = () => {
  useTitle('Workflows');
  
  const { workflows } = useLoaderData();

  const [openCreateDialog, setOpenCreateDialog] = useState(false);
  
  const handleOpenDialog = () => setOpenCreateDialog(true);
  const handleCloseDialog = () => {
    setOpenCreateDialog(false)
  };

  if (!workflows) {
    return "Loading..."
  }

  return (
    <Container maxWidth="sm">
      <Stack
        direction="column"
        spacing={2}
      >
        {workflows.map(workflow => <Workflow key={workflow.id} workflow={workflow} />)}
        <Fab color="primary" variant="extended" onClick={handleOpenDialog}>
          <Add />
          Add New Workflow
        </Fab>

        <Dialog open={openCreateDialog} onClose={handleCloseDialog}>
          <Form method="post">
            <DialogTitle>Create New Workflow</DialogTitle>
            <DialogContent>
              <DialogContentText>
                Enter the name of the new workflow to be created.
              </DialogContentText>
              <TextField
                autofocus
                label="Workflow Name"
                fullWidth
                variant="standard"
                name='name'
              />
            </DialogContent>
            <DialogActions>
              <Button type="submit">Create</Button>
              <Button onClick={handleCloseDialog}>Cancel</Button>
            </DialogActions>
          </Form>
        </Dialog>

      </Stack>
    </Container>
  )
};

export { Workflows };