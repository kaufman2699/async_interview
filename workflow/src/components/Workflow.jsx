import React from 'react'
import { useApi } from '../api';
import { Accordion, AccordionDetails, AccordionSummary, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography, } from '@mui/material';
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

const Workflow = ({ workflow }) => {
  const tasks = useApi({ method: 'get', endpoint: `/workflows/${workflow.id}/tasks`}) || []

  return(
    <Accordion>
      <AccordionSummary
        // expandIcon={<ExpandMoreIcon />}
        aria-controls={`panel${workflow.id}-content`}
        id={`panel${workflow.id}-header`}
      >
        <Typography>
          { workflow.name }
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <div className='workflow-tasks'>
          <List>
            {
              tasks.map(task => <Task key={task.id} task={task} />)
            }

          </List>
        </div>
      </AccordionDetails>
    </Accordion>
  )
};

export { Workflow };
