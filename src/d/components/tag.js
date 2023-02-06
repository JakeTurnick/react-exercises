import "./tag.css"

function Tag(props) {
    return (
        <li>
            <button className="tag" onClick={props.changeLinks} value={props.tag} >{props.tag}</button>
        </li>
    )
}

export default Tag;