import { useState } from "react";
import { nanoid } from "nanoid";
import "./link-form.css"

function LinkForm(props) {
    const [title, setTitle] = useState("");
    const [url, setUrl] = useState("");
    const [linkTags, setlinkTags] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const linkTagsArr = linkTags.split(" ")
        const newLink = {
            key: nanoid(),
            title,
            url,
            linkTags: linkTagsArr
        }
        props.addLink(newLink)
        props.addTag(linkTagsArr)
        setTitle("");
        setUrl("");
        setlinkTags("");
    }


    return (
        <form onSubmit={handleSubmit} className="link-form" >
            <h3>I am the link form</h3>
            <input type="text" placeholder="Link title" id="link-title" value={title} onChange={e => setTitle(e.target.value)} />
            <input type="url" placeholder="Link URL" id="link-url" value={url} onChange={e => setUrl(e.target.value)} />
            <input type="text" placeholder="linkTags (space seperated) tag1 tag2 tag3" value={linkTags} onChange={e => setlinkTags(e.target.value)} />
            <br />
            <button type="submit">Add link!</button>
        </form>
    )
}

export default LinkForm;