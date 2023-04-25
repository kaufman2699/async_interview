import React from 'react';
import { css } from '@emotion/react';
import { Accordion, AccordionDetails, AccordionSummary, Fab, Typography } from '@mui/material';
import { Send } from '@mui/icons-material';
import { useSubmit } from 'react-router-dom';

const Delivery = ({ delivery }) => {
  const submit = useSubmit();

  const fabStyle = css`
    position: absolute;
    bottom: 16px;
    right: 16px;
    display: ${ delivery.state === 'NEW' ? 'flex' : 'none' }
  `

  return (
    <Accordion>
      <AccordionSummary>
        <Typography>
          {delivery.name}
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
          {delivery.state}
        </Typography>
        <Fab
          color="primary"
          size="small"
          variant="extended"
          sx={fabStyle}
          onClick={() => {
            const formData = new FormData();
            formData.append('id', delivery.id);
            formData.append('state', 'DELIVERED');

            submit(formData, {
              action: "/deliveries",
              method: "put",
            })
          }}
        >
          <Send />
          Deliver
        </Fab>
      </AccordionDetails>
    </Accordion>
  )
};

export { Delivery };