const express=require('express');
const router=express.Router();

const {registerUser, login, followUser} = require('../controllers/user');
const {isAuthenticated}=require('../middlewares/auth')


router.post('/register', registerUser);
router.post('/login', login);

router.route('/follow/:id').get(isAuthenticated,followUser)

module.exports=router;
