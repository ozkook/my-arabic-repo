var express = require('express');
var router = express.Router();

/* GET first arabic page. */
router.get('/',(req, res, next)=>{
    res.render('page_one', { title: 'title' });
});

module.exports = router;


