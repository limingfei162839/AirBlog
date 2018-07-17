var express = require('express');
var user = require('../modules/login/login.js');
router = express.Router();
//用户登录
router.get('/signUser', function(req, res) {
    user.signUser(req.query, function(result) {
        res.send(result);
    })
});

module.exports = router;