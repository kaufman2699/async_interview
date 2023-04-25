var express = require('express');
var router = express.Router();
const { database } = require('../database');

/* GET workflows listing. */
router.get('/', async function(req, res, next) {
  const allDeliveries = await database('deliveries');

  res.send(allDeliveries);
});  

/* POST to create a workflow and tasks */
router.put('/:id', async function(req, res, next) {

  const params = req.body;

  const delivery = await database('deliveries')
    .where({ id: req.params.id })
    .update({ state: params.state })
    .returning(['*']);

  res.send(delivery);
})

module.exports = router;
