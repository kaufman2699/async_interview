import { api } from './api';

const loadWorkflows = async () => {
  const workflows = await api.get('/workflows');

  return {
    workflows: workflows.data
  };
};

export {
  loadWorkflows,
};
