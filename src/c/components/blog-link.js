import "./blog-link.css"

function BlogLink(props) {
    return(
        <li>
            <button className="blog-link-btn" onClick={props.changeBlog} value={props.blog.key}>
                {props.blog.title}
            </button>
        </li>
)}

export default BlogLink;