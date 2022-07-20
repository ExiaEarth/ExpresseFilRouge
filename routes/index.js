const AuthRouter = require('./auth-router');
const categoryRouter = require('./category-router');
const taskRouter = require('./task-router');
const UserRouter = require('./user-router');

const router=require('express').Router();

router.use('/category',categoryRouter)
router.use('/task',taskRouter)
router.use('/user',UserRouter)
router.use('/auth',AuthRouter)



module.exports=router;