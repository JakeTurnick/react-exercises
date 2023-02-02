import "./contact-form.css";
import { useState } from "react";
import { nanoid } from "nanoid"

function ContactForm(props) {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [address, setAddress] = useState('');
    const [phoneNum, setPhoneNum] = useState('');

    const handleFirst = (first) => {
        setFirstName(first.target.value);
    }
    const handleLast = (last) => {
        setLastName(last.target.value);
    }
    const handleAdress = (address) => {
        setAddress(address.target.value);
    }
    const handlePhoneNum = (phoneNum) => {
        setPhoneNum(phoneNum.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const firstName = e.target.firstName.value;
        const lastName = e.target.lastName.value;
        const address = e.target.address.value;
        const phoneNum = e.target.phoneNum.value;
        const key = nanoid();
        const contact = { firstName, lastName, address, phoneNum, key }

        props.addContact(contact);
    }

    return (
        <form onSubmit={handleSubmit} id="contact-form">
            <input type="text" id="firstName" placeholder="First name" value={firstName} onChange={handleFirst} />
            <input type="text" id="lastName" placeholder="Last name" value={lastName} onChange={handleLast} />
            <input type="text" id="address" placeholder="42 Wallaby Way, Sydney, Australia" value={address} onChange={handleAdress} />
            <input type="text" id="phoneNum" placeholder="#123-456-7890" value={phoneNum} onChange={handlePhoneNum} />
            <button type="submit">Add Contact</button>
        </form>
    )
}

export default ContactForm;