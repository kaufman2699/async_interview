import React from 'react';
import { ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { CheckBox, CheckBoxOutlineBlank, Pending } from '@mui/icons-material';

const Task = ({ task }) => {

  const ICON_MAPPER = {
    NEW: <CheckBoxOutlineBlank />,
    IN_PROGRESS: <Pending />,
    DONE: <CheckBox />
  }

  return (
    <ListItem>
      <ListItemButton>
        <ListItemIcon>
          { ICON_MAPPER[task.state] }
        </ListItemIcon>
        <ListItemText primary={`${task.name} (${task.state})`} />
      </ListItemButton>
    </ListItem>
  )
}

export { Task };
