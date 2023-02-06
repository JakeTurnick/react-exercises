import BlogLink from "./blog-link";
import "./blog-nav.css"

function BlogNav(props) {
    const blogLinksHTML = props.blogs.map(blog => (
        <BlogLink blog={blog} key={blog.key} changeBlog={props.changeBlog}/>
    ))

    return (
        <section id="blog-nav">
            <h2>BlogNav</h2>
            <ul>{blogLinksHTML}</ul>
        </section>
    )
}

export default BlogNav;