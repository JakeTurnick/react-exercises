import { useState } from "react";
import {nanoid} from "nanoid";
import BlogList from "./components/blogList";
import BlogForm from "./components/blogForm";
import BlogReader from "./components/blogReader";

const INITIAL_BLOGS = [
    {
		title: "first blog",
		blogBody: "this is the first blog main text",
		key: nanoid(),
	},
	{
		title: "2nd",
		blogBody: "Man... this programming stuff aint easy",
		key: nanoid(),
	},
	{
		title: "== != =",
		blogBody:
			"I spent 20min wondering why a key kept changing... I used = to find a blog based on key",
		key: nanoid(),
	},
    {
        title: "Perseverance",
        blogBody: `It's rought, but I must push through and harden myself to the pain of being lost in my own ideas.
        It was never meant to be easy.`,
        key: nanoid(),
    }
];
//e) Create a complete blog CMS from scratch, allowing you to create, read, update, and delete blog posts.
//components map: BlogForm - BlogList - BlogView - BlogEdit

function E() {
    const [blogs, setBlogs] = useState(INITIAL_BLOGS);
    const [currBlog, setCurrBlog] = useState(null)

    const addBlog = (newBlog) => {
        setBlogs([newBlog, ...blogs])
    }
    const selectBlog = (choice) => {
        setCurrBlog(choice)
    }

    return (
        <section id="E" className="component">
            <h1>E</h1>
            <BlogForm addBlog={addBlog} />
            <BlogList blogs={blogs} selectBlog={selectBlog} />
            <BlogReader blog={currBlog} />
        </section>
        
    )
}

export default E;