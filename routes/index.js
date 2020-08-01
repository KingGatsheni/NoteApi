const router = require('express').Router();
const postModel = require('../models/post')
const mongoose = require('mongoose');

router.get('/', (req,res) =>{
    res.send('API live at this instance');
})
router.post('/insert', (req,res)=>{
	console.log('Submitting new Post...');
	let postObj = {
		"_id": new mongoose.Types.ObjectId(),
		"post": req.body.post
	}
	let newPost = new postModel(postObj);
    newPost.save((err, post) =>{
	if(err){
		res.status(400).send({msg: 'An error occured while inserting post..'})
	}else{
		res.status(200).json(post);
	}
})
})

router.get('/userpost',(req,res)=>{
	console.log('Retrieving posts...');
    postModel.find({}).exec((err,posts)=>{

	if(err){
		res.status(400).send(err);
	}else{
        res.status(200).send(posts)
    }
	res.end();
})
})

module.exports = router;