var express = require('express');
var router = express.Router();
const { database } = require('../database');

/* GET workflows listing. */
router.get('/', async function(req, res, next) {
  const allWorkflows = await database('workflows');

  res.send(allWorkflows);
});  

router.get('/:id/tasks', async function(req, res, next) {
  const workflowId = req.params.id;

  const tasks = await database('tasks').where('workflow_id', workflowId);

  res.send(tasks);
})

/* POST to create a workflow and tasks */
router.post('/', async function(req, res, next) {

  const params = req.body;

  const [workflow] = await database('workflows').insert(
    { name: params.name }
  ).returning(['*']);

  const _tasks = await database('tasks').insert([
    { workflow_id: workflow.id, name: "PREPARE", state: "NEW"},
    { workflow_id: workflow.id, name: "REVIEW", state: "NEW"},
    { workflow_id: workflow.id, name: "DELIVER", state: "NEW"},
  ])

  res.send(workflow);
})

module.exports = router;
