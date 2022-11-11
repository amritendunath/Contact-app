import React, {useState, useEffect} from 'react';
import './App.css';
import Header from './Header.js';
import AddContact from './AddContact.js';
import ContactList from './ContactList.js';
import {v4 as uuid} from 'uuid';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';


function App(){
  

  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts]=useState(JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)));
  useEffect(()=>{
    localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(contacts));
  })

  const addContactHandler = (contact)=>{   
    console.log(contact);
    setContacts([...contacts,{id: uuid(),...contact}])//to render as a form (name: and email:) 
  }

  //delete
  const removeContactHandler = (id)=>{
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });
    setContacts(newContactList)
  };


  return (
    <div className='ui container'>
      
      <Header/>

      <AddContact addContactHandler={addContactHandler}/>
      <ContactList contacts={contacts} getContactId={removeContactHandler}/>
      
      
    </div>
  )
}

export default App;
