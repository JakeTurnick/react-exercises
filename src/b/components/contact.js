import "./contact.css";

function Contact(props) {
  return (
    <li className="contact-card">
      <div className="contact-name">
        <p>{props.first}</p>
        <p>{props.last}</p>
      </div>
      <p>{props.address}</p>
      <p>{props.phoneNum}</p>
    </li>
  );
}

export default Contact;
