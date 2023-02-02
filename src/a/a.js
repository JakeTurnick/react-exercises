import { useState } from "react";
import BlogForm from "./components/blog-form";
import Blog from "./components/blog";
import "./a.css"

function A() {
    const [blogs, setBlogs] = useState([]);

    const addBlog = (blog) => {
        setBlogs([blog, ...blogs]);
    }

    const blogsHTML = blogs.map(blog => (
        <Blog blogTitle={blog.title} blogBody={blog.body} />
    ))

    return (
        <div className="component">
            <h2>A - Form that saves a blog post</h2>
            <BlogForm addBlog={addBlog}/>
            <div className="blogs">{blogsHTML}</div>
        </div>
        
    )
}

export default A;
