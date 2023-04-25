import { api } from './api';

const createWorkflow = async ({ request, params }) => {
  const formData = await request.formData();
  const updates = Object.fromEntries(formData);
  const response = api.post('/workflows', updates);
  
  return { workflow: response.data };
}

export {
  createWorkflow,
};
