import { useState } from "react";
import { nanoid } from "nanoid"

function BlogForm(props) {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const newBlog = {
            title,
            blogBody: body,
            key: nanoid()
        }
        props.addBlog(newBlog);
        setTitle("");
        setBody("");
    }

    return (
        <form onSubmit={handleSubmit} className="" >
            <input type="text" placeholder="Blog title" id="new-blog-title" value={title} onChange={e => setTitle(e.target.value)} />
            <input type="text" placeholder="Main content" id="new-blog-body" value={body} onChange={e => setBody(e.target.value)} />
            <button type="submit">Add Blog!</button>
        </form>
    )
}

export default BlogForm;