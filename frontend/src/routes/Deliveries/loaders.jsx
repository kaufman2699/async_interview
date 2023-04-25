import { api } from './api';

const loadDeliveries = async () => {
  const deliveries = await api.get('/deliveries');

  return {
    deliveries: deliveries.data
  };
};

export {
  loadDeliveries,
};
