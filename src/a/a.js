import { useState } from "react";
import BlogForm from "./components/blog-form";
import Blog from "./components/blog";

function A() {
    const [blogs, setBlogs] = useState([]);

    const addBlog = (blog) => {
        setBlogs([blog, ...blogs]);
    }

    const blogsHTML = blogs.map(blog => (
        <Blog blogTitle={blog.title} blogBody={blog.body} />
    ))

    return (
        <>
            <BlogForm addBlog={addBlog}/>
            <div className="blogs">{blogsHTML}</div>
        </>
        
    )
}

export default A;
