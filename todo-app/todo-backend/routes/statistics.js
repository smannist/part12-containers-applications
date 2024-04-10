const express = require('express');
const router = express.Router();
const { getAsync } = require('../redis')

router.get('/', async (req, res) => {
  const todoCount =  Number(await getAsync('todo_count'));
  res.send({
    added_todos: todoCount || 0
  })
});

module.exports = router;
