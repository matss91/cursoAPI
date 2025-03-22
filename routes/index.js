var express = require('express');
var router = express.Router();
const { 
 list,store,detail,upDate,remove
} = require('../controllers/projectsController');
/* GET home page. */

router.get('/projects',list);
router.post('/projects',store);


router.get('/projects/:id',detail);
router.put('/projects/:id',upDate);
router.delete('/projects/:id',remove);
  
module.exports = router;
