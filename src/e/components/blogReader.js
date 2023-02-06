import Blog from "./blog";
import "./blogReader.css"

function BlogReader(props) {

    return (
        <div id="blog-reader">
            {!props.blog && <h3>Select a blog to view!</h3>}
            {props.blog && <Blog blog={props.blog} body={props.blog.blogBody} />}
        </div>
        
    )
}

export default BlogReader;