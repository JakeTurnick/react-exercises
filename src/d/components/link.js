import "./links.css"
import Tag from "./tag"
import { nanoid } from "nanoid"

function Link(props) {
    const tagsHTML = props.link.linkTags?.map(tag => <Tag tag={tag} key={nanoid()}/>)

    return (
        <li>
            <h3><a href={props.link.url} target="_blank" className="link" key={props.link.key} >{props.link.title}</a></h3>
            <ul className="link-tags" >{tagsHTML}</ul>
        </li>
    )
}

export default Link