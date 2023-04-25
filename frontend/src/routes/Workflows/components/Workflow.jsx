import React from 'react'
import { useApi } from '../api';
import { Accordion, AccordionDetails, AccordionSummary, List, Typography, } from '@mui/material';

import { Task } from './Task';

const Workflow = ({ workflow }) => {
  const tasks = useApi({ method: 'get', endpoint: `/workflows/${workflow.id}/tasks`}) || []

  return(
    <Accordion>
      <AccordionSummary
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
