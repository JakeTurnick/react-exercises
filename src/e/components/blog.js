import "./blog.css"

function Blog(props) {

    return (
        <article id="selected-blog">
            <h3>{props.blog.title}</h3>
            {props.body && <p>{props.body}</p>}
            <div className="blog-actions">
                <button className="sel-btn" onClick={props.selectBlog} value={props.blog.key} >View me ^</button>
                <button className="edit-btn" >Edit Blog</button>
                <button className="del-btn" onClick={props.deleteBlog} value={props.blog.key} >Delete</button>
            </div>
        </article>
    )
}

export default Blog;