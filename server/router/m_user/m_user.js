var express = require('express');
var user = require('../../modules/m_user/m_user');
router = express.Router();

router.get('/AddUser', function(req, res) { //用户增加
    user.AddUser(req.query, function(result) {
        res.send(result);
    })
});

router.get('/DeleteUser', function(req, res) { //用户删除
    user.DeleteUser(req.query, function(result) {
        res.send(result);
    })
});

router.get('/UpdateUser', function(req, res) { //用户删除
    user.UpdateUser(req.query, function(result) {
        res.send(result);
    })
});

router.get('/SelectUser', function(req, res) { //用户查询
    user.SelectUser(req.query, function(result) {
        res.send(result);
    })
});
module.exports = router;