const { response } = require('express');
const express = require('express');
const router = express.Router()
const signUpTemplateCopy = require('../models/SignUpModels')
const noteTemplateCopy = require('../models/NoteModels')

router.post('/signup', function(req,res){
    const signedUpUser = new signUpTemplateCopy({
        fullName:req.body.fullName,
        username:req.body.username,
        email:req.body.email,
        password:req.body.password
    })
    signedUpUser.save()
    .then(function(data){
        res.json(data)
    })
    .catch(function(e){
        res.json(e)
    })
})
router.post('/addNote', function(req,res){
    const Note = new noteTemplateCopy({
        title:req.body.title,
        content:req.body.content
    })
    Note.save()
    .then(function(data){
        res.json(data)
    })
    .catch(function(e){
        res.json(e)
    })
})
router.get("/getNotes", function(req,res){
    noteTemplateCopy.find({},function(err, notes){
        res.send(notes);
    })
})

router.post("/deleteNotes", function(req,res){
    
    noteTemplateCopy.deleteOne(
        {title: req.body.title, content: req.body.content},
        function(err){
            
            if(!err){
                res.send("Successfully deleted");
            }else{
                res.send(err);
            }
        }
    )
})

module.exports = router