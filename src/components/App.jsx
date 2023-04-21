import {useState, useEffect} from "react";

import { Form } from "./Form/Form";
import { Contacts } from "./Contacts/Contacts";
import { Filter } from "./Filter/Filter";
import { Title } from "./App.styled";

export const App = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => { 
    const contactsBook = JSON.parse(localStorage.getItem("contacts"));
    if (contactsBook) {setContacts(contactsBook)}
  }, [])
  
  useEffect(() => { 
    localStorage.setItem("contacts", JSON.stringify(contacts))
  },[contacts])

return(
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <Title>Phonebook</Title>  
        <Form/>

      <Title>Contacts</Title>
        <Filter/>
        <Contacts/>
    </div>
  );
};
