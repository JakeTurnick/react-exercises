import "./blog-reader.css"

function BlogReader(props) {
    return ( 
        <article id="blog-reader">
                <h3>{props.blog.title}</h3>
                <p>{props.blog.blogBody}</p>
        </article>
        
    )
}

export default BlogReader;