import React, { useState } from "react";
import axios from "axios";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";



function App(){
    var [notes,addToNotes] = useState([]);
    
    if(notes.length === 0){
        axios.get('/app/getNotes')
        .then(res => {
            
            addToNotes(res.data);
        })
    }
    
    function buttonAdd(item){
        axios.post('/app/addNote', item)
        .then(res => console.log(res.data))
        addToNotes(prevValue => {
            return([...prevValue, item])
        })
    }
    function deleteNote(id){
        
        axios.post('/app/deleteNotes', notes[id])
        .then(
            res => {
                console.log(res);
                
            }
        )
        addToNotes(prevValue => {
            return( prevValue.filter((noteItem, index) => {
                return index !== id;
            } ))
        })
    }
    var [loggedIn,logIn] = useState(true);



    var [user,updateUser] = useState({
        fullName:"",
        username:"",
        email:"",
        password:""
    })
    function userChange(event){
        var {value, name} = event.target;
        updateUser(prevValue => {
            return(
                {
                    ...prevValue,
                    [name] : value
                }
            )
        })

    }
    function formSubmit(event){
        event.preventDefault();
        axios.post('/app/signup', user)
        .then(res => console.log(res.data))
        updateUser({
            fullName:"",
            username:"",
            email:"",
            password:""
        });
        logIn(() => {
            return true;
        })
    }


    return loggedIn ? <div>
        <Header/>
        <CreateArea buttonClick={buttonAdd} />
        
        {notes.length==0 ? "No notes" : notes.map( (item,index) => 
            <Note key={index} id={index} title={item.title} content={item.content} deleteButton={deleteNote} />
        )}
        
        <Footer/>
    </div> :
    <div>
        <form method="post" action="/" id="form" class="validate" onSubmit={formSubmit} >
        <div class="form-field">
            <input type="text" name="fullName" id="fullName" placeholder="Full Name" value={user.fullName} onChange={userChange} required />
        </div>
        <div class="form-field">
            <input type="text" name="username" id="username" placeholder="username" value={user.username} onChange={userChange} required />
        </div>
        <div class="form-field">
            <input type="text" name="email" id="email" placeholder="email" value={user.email} onChange={userChange} required />
        </div>
        <div class="form-field">
            <input type="password" name="password" id="password" placeholder="password" value={user.password} onChange={userChange} required />
        </div>
        <div class="form-field">
            <input type="submit" value="Login" />
        </div>
    </form>
    </div>
}


export default App;