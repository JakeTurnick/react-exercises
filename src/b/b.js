import { useState } from "react";
import ContactList from "./components/contact-list";
import ContactForm from "./components/contact-form";
import "./b.css";

function B() {
	const [contacts, setContacts] = useState([]);

	const addContact = (contact) => {
		setContacts([...contacts, contact]);
	};

	return (
		<section id="B" className="component">
			<h2>B - Contact list and form</h2>
			<div id="contact-area">
				<ContactForm addContact={addContact} />
				<ContactList contacts={contacts} />
			</div>
		</section>
	);
}

export default B;
