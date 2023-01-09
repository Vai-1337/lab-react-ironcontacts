import { useState } from "react";
import contacts from "./contacts.json";
import "./App.css";

import * as React from 'react';
import Button from '@mui/material/Button';


const App = () => {
  // check contacts.json
  console.log(contacts);

  // sélection de 5 contact dans contacts.json
  const [contactsList, setContactsList] = useState(contacts.slice(0, 5));
  const [contactListNew, setContactListNew] = useState(contacts.slice(5)) 

  // function pour ajouter un nouveau contact
  const addRandomContact = () => {
    if (contactListNew.length === 0) {
      return;
    } else {
    const randomIndex = Math.floor(Math.random() * contactListNew.length)
    
    const randomContact = contactListNew[randomIndex]
    setContactsList([...contactsList, randomContact])
    setContactListNew(contactListNew.filter((_, i) => i !== randomIndex))}
  };

  const sortByName = () => {
    const sortContacts = contactsList.sort((a, b) => 
    a.name.localeCompare(b.name));
    setContactListNew(sortContacts);
    const randomIndex = Math.floor(Math.random() * contactListNew.length)
    setContactListNew(contactListNew.filter((_, i) => i !== randomIndex))
  };

  const sortByPopularity = () => {
    const sortContacts = contactsList.sort((a, b) => 
    b.popularity - a.popularity)
    setContactListNew(sortContacts);
    const randomIndex = Math.floor(Math.random() * contactListNew.length)
    setContactListNew(contactListNew.filter((_, i) => i !== randomIndex))
  };

  const deleteContact = (e) => {
    setContactsList(contactsList.filter((contact) => contact.name !== e));
  };

  return (
    <div className="App">
     
      <table className="table" >
      <button onClick={addRandomContact}>Add Random Contact</button>
      <button onClick={sortByName}>Sort by Name</button>
      <button onClick={sortByPopularity}>Sort by Popularity</button>        
        <tbody className='tbody' style={{display:'flex', flexWrap:'wrap',margin:'auto', justifyContent:'space-around'}} >
          {contactsList.map((contact) => (
            <tr>
              <td>
                <img src={contact.pictureUrl} alt={contact.name} style={{width:'80px'}} onClick={() => deleteContact(contact.name)} />            
              </td>
              <td>{contact.name}</td>
              {/*Utilisation de toFixed pour arrondir à 2 décimal */}
              {/*Utilisation de parseFloat si soucis avec string */}
              <td>{contact.popularity.toFixed(2)}</td>  
              <td>{contact.wonOscar ? '🏆' : ''}</td>
              <td>{contact.wonEmmy ? '🏆' : ''}</td>
              {/* <Button variant="contained" color="error" >X</Button> */}
            </tr>
          ))}
        </tbody>
      </table>      
    </div>
  );
};
export default App;
