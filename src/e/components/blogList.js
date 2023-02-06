import Blog from "./blog";

function BlogList(props) {
    const blogsHTML = props.blogs.map(blog => <Blog blog={blog} key={blog.key} />)

    return (
        <>
            <p>I am the blog viewer</p>
            <ul>{blogsHTML}</ul>
        </>
    )
}

export default BlogList;