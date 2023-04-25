import React from 'react';

import { useApi } from "../api"
import { Workflow } from "./Workflow";

const Workflows = () => {
  const workflows = useApi({ method: 'get', endpoint: '/workflows' });

  if (!workflows) {
    return "Loading..."
  }

  return (
    <div>
      {workflows.map(workflow => <Workflow key={workflow.id} workflow={workflow} />)}
    </div>
  )
};

export { Workflows };