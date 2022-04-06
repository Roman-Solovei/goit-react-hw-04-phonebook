import s from './contactlistitem.module.css'
import PropTypes from "prop-types";


export default function ContactListItem ({ name, number, id, delContact }) {
    return (<li className={s.listItem}>
        {name}:   {number} 
        <button className={s.listButton} onClick={()=>delContact(id)}>
            Delete
        </button>
    </li>)
}

ContactListItem.propTypes = {
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    delContact: PropTypes.func.isRequired,
}
