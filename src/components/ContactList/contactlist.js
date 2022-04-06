import ContactListItem from "../ContactListItem"
import PropTypes from "prop-types";
import s from "./contactlist.module.css"


export default function ContactList({ contacts, delContact }) {
    
     return <ul className={s.list}>
        {contacts.map(contact =>(         
         <ContactListItem 
         key = {contact.id}
         id={contact.id}
         name= {contact.name}
         number={contact.number}
         delContact={delContact}
         /> 
      ))}
    </ul>
};

ContactList.propTypes = {
    contacts: PropTypes.array.isRequired,
    delContact: PropTypes.func.isRequired,
}