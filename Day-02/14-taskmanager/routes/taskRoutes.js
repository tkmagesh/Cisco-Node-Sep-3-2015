var express = require('express');
var router = express.Router();

var tasks = [
     { id : 1, name : "Explore Bangalore", isCompleted : false},
     { id : 2, name : "Watch a movie", isCompleted : false},
     { id : 3, name : "Fix THAT bug", isCompleted : false}
];

/* GET home page. */
router.get('/', function(req, res, next) {

    res.render('tasks/list', {list : tasks});
});

router.get('/new', function(req, res, next){
    res.render('tasks/new');
});

router.post('/new', function (req, res, next){
    var newTaskName = req.body.newTaskName;
    var newTaskId = tasks.reduce(function(result, task){
        return result > task.id ? result : task.id;
    }) + 1;
    var newTask = {
        id : newTaskId,
        name : newTaskName,
        isCompleted : false
    };
    tasks.push(newTask);
    res.redirect('/tasks');
});

router.get('/toggle/:id', function(req, res, next){
    var taskId = parseInt(req.params.id, 10);
    var task = tasks.filter(function(t){
        return t.id === taskId;
    })[0];
    if (task){
        task.isCompleted = !task.isCompleted;
    }
    res.redirect('/tasks');
})

module.exports = router;
