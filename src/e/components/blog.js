

function Blog(props) {

    return (
        <li>
            <h3>{props.blog.title}</h3>
            {props.body && <p>{props.body}</p>}
        </li>
    )
}

export default Blog;