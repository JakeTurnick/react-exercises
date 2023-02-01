import { useState } from "react";
import { nanoid } from "nanoid";

function BlogForm({ addBlog }) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleTitle = (input) => {
    setTitle(input.target.value);
  };

  const handleBody = (input) => {
    setBody(input.target.value);
  };

  const blog = {
    id: nanoid(),
    title,
    body,
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("blog", blog);
    addBlog(blog);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        id="title"
        placeholder="Blog-Title"
        value={title}
        onChange={handleTitle}
      />
      <input
        type="text"
        id="body"
        placeholder="Blog-Body"
        value={body}
        onChange={handleBody}
      />
      <h1>hey</h1>
      <button type="submit">Submit blog</button>
    </form>
  );
}

export default BlogForm;
