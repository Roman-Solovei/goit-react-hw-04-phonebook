import React, { Component } from "react";
import { nanoid } from "nanoid";
import "./App.module.css";
import ContactForm from "./components/ContactForm";
import Filter from "./components/Filter";
import ContactList from "./components/ContactList";
import Container from "./components/Container";



export default class App extends Component { 

    state = {
        contacts: [
        {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
        {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
        {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
        {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
        ],
        filter: '',    
    }
    
    addContact = (newContact) => {
        const contactItem = {
        id: nanoid(),
        name: newContact.name,
        number: newContact.number
        };

        this.setState(({ contacts }) => ({
        contacts : [contactItem, ...contacts]
        })) 
    };

    delContact = (contactId) => {
        this.setState(({ contacts }) => ({
        contacts: contacts.filter(contact => contact.id !== contactId)
        }))
    };

    filter = (event) => {
        this.setState({ filter: event.target.value })
    };
    
    filterContact = () => {
        return this.state.contacts.filter(contact => contact.name.toLowerCase().includes(this.state.filter.toLowerCase()))    
    };

    
    componentDidMount() {   
        const contacts = localStorage.getItem('contacts')   
        const parseContacts = JSON.parse(contacts)   
        if (parseContacts) {
            this.setState({ contacts: parseContacts })
        }    
    };
    

    componentDidUpdate(prevProps, prevState) {
        const { contacts } = this.state
        if (contacts !== prevState.contacts) {       
            localStorage.setItem('contacts', JSON.stringify(contacts))
        }   
    };
    
    
    render() {
        const { contacts,filter } = this.state;
        return (<>
            <Container>
            <h1>Phonebook</h1>
            <ContactForm addContact={ this.addContact } contactList={ contacts }/>
            <h2>Contacts</h2>
            <Filter value={ filter } filter={ this.filter } />
            <ContactList delContact={ this.delContact } contacts={ this.filterContact() } />
            </Container>
        </>)
    }      
};