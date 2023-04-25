/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('tasks').del();
  await knex('workflows').del();
  
  const [first, second] = await knex('workflows').insert([
    { name: '2022 XYZ Corp Tax Return' },
    { name: '2022 ABC Corp Audit' }
  ]).returning(['id', 'name']);

  await knex('tasks').insert([
    {
      workflow_id: first.id,
      name: 'PREPARE',
      state: 'NEW',
    },
    {
      workflow_id: first.id,
      name: 'REVIEW',
      state: 'NEW',
    },
    {
      workflow_id: first.id,
      name: 'DELIVER',
      state: 'NEW',
    },
    {
      workflow_id: second.id,
      name: 'PREPARE',
      state: 'NEW',
    },
    {
      workflow_id: second.id,
      name: 'REVIEW',
      state: 'NEW',
    },
    {
      workflow_id: second.id,
      name: 'DELIVER',
      state: 'NEW',
    },
  ])
};
