import React, { useState } from 'react';
import styled from '@emotion/styled';

import { Container, CssBaseline, Paper, Tab, Tabs, Typography } from '@mui/material'
import { ThemeProvider, createTheme } from '@mui/material/styles';

import { Link, Outlet, useLocation } from 'react-router-dom';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    body: {
      margin: '24px'
    }
  },
})

const BodyContainer = styled(Container)`
  margin-top: 32px;
`
const BodyPaper = styled(Paper)`
  padding: 32px;
`

const Header = styled(Typography)`
  margin-left: 16px;
  margin-bottom: 16px;
`

function Root() {
  const [title, setTitle] = useState("KR Interview");
  
  const currentTab = useLocation().pathname

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <BodyContainer maxWidth="sm">
        <BodyPaper elevation={3}>
          <Tabs value={currentTab}>
            <Tab label="Workflows" value="/workflows" to="/workflows" component={Link} />
            <Tab label="Deliveries" value="/deliveries" to="/deliveries" component={Link} />
          </Tabs>
          <Header variant="h2">
            { title }
          </Header>
          <div className="App">
            <Outlet context={{ title, setTitle }} />
          </div>
          
        </BodyPaper>
      </BodyContainer>
    </ThemeProvider>
  );
}

export default Root;
