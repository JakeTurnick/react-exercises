import { useState } from "react";
import {nanoid} from "nanoid";
import BlogList from "./components/blogList";
import BlogForm from "./components/blogForm";
import BlogReader from "./components/blogReader";
import "./e.css"

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
        const blogChoice = blogs.find(blog => blog.key == choice.target.value);
        setCurrBlog(blogChoice)
    }
    //editBlog
    const deleteBlog = (choice) => {
        const newBlogs = blogs.filter(blog => blog.key !== choice.target.value)
        setBlogs(newBlogs)
        setCurrBlog(null)
    }

    return (
        <section id="E" className="component">
            <h1>E - CRUD Blogs</h1>
            <BlogForm addBlog={addBlog} />
            <div id="blog-select-view">
                <BlogList blogs={blogs} selectBlog={selectBlog} deleteBlog={deleteBlog} />
                <BlogReader blog={currBlog} />
            </div>
        </section>
        
    )
}

export default E;