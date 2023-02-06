import Tag from "./tag";
import {nanoid} from "nanoid"

function TagList(props) {

    const tagsHTML = props.tags.map(tag => <Tag tag={tag} key={nanoid()} changeLinks={props.changeLinks} />)

    return (
        <>
            <h2>I am the tag List!</h2>
            <ul className="link-tags" >{tagsHTML}</ul>
        </>
    )
}

export default TagList;