/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('tasks', table => {
    table.increments();
    table.integer('workflow_id').unsigned();
    table.foreign('workflow_id').references('workflows.id');
    table.enu('name', ['PREPARE', 'REVIEW', 'DELIVER'])
    table.enu('state', ['NEW', 'IN_PROGRESS', 'DONE'])
    table.timestamps();
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('tasks');
};
