import { useState } from "react";
import { nanoid } from "nanoid";
import BlogNav from "./components/blog-nav";
import BlogReader from "./components/blog-reader";

const initialBlogs = [
	{
		title: "first blog",
		blogBody: "this is the first blog main text",
		key: nanoid(),
	},
	{
		title: "2nd",
		blogBody: "battlefield 2042 sucked",
		key: nanoid(),
	},
	{
		title: "== != =",
		blogBody:
			"I spent 20min wondering why a key kept changing... I used = to find a blog based on key",
		key: nanoid(),
	},
];

function C() {
	const [blogs, setBlogs] = useState(initialBlogs);
	const [currBlog, setCurrBlog] = useState(blogs[0]);

	const changeBlog = (newBlogKey) => {
		const foundBlog = blogs.find((blog) => blog.key == newBlogKey.target.value);
		setCurrBlog(foundBlog);
	};

	return (
		<div id="c" className="component">
			<h2>C - Blog Browser</h2>
			<div id="blog-viewer">
				<BlogNav blogs={blogs} changeBlog={changeBlog} />
				<BlogReader blog={currBlog} />
			</div>
		</div>
	);
}

export default C;
