/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('deliveries').del()
  await knex('deliveries').insert([
    {name: 'XYZ Tax Return Delivery', state: 'DELIVERED'},
    {name: 'ABC Audit Delivery', state: 'NEW'},
  ]);
};
