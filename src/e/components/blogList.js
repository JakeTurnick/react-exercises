import Blog from "./blog";
import "./blogList.css"

function BlogList(props) {
    const blogsHTML = props.blogs.map(blog => <li key={blog.key}><Blog blog={blog} key={blog.key} selectBlog={props.selectBlog} deleteBlog={props.deleteBlog} /></li>)

    return (
        <ul id="blog-list">
            <li><h3>Blog List:</h3></li>    
            {blogsHTML}
        </ul>
    )
}

export default BlogList;