import { api } from './api';

const updateDelivery = async({ request, params }) => {
  const formData = await request.formData();
  const updates = Object.fromEntries(formData);

  console.log({ updates });

  const response = api.put(`/deliveries/${updates.id}`, { state: updates.state });

  return { delivery: response.data };
}

export {
  updateDelivery,
};
