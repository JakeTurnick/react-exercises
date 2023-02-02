import Contact from "./contact";
import "./contact-list.css"

function ContactList(props) {

    const contactsHTML = props.contacts.map(contact => (
        <Contact first={contact.firstName} last={contact.lastName} address={contact.address} phoneNum={contact.phoneNum} key={contact.key} />
    ))

    return(
        <div id="contact-list">
            <p>Contact List:</p>
            <ul>{contactsHTML}</ul>
        </div>
    )
}

export default ContactList;