import Blog from "./blog";

function BlogReader(props) {
    console.log(props)

    return (
        props.blog && <Blog blog={props.blog} />
    )
}

export default BlogReader;