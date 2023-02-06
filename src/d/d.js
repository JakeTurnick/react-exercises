import { useState } from "react";
import { nanoid } from "nanoid";
import LinkForm from "./components/link-form";
import StoredLinks from "./components/stored-links";
import TagList from "./components/tag-list";

const INITIAL_LINKS = [
	{
		key: nanoid(),
		title: "reddit",
		url: "https://www.reddit.com/",
		linkTags: ["fun", "social"],
	},
	{
		key: nanoid(),
		title: "youtube",
		url: "https://www.youtube.com/",
		linkTags: ["fun", "learning"],
	},
	{
		key: nanoid(),
		title: "MDN",
		url: "https://developer.mozilla.org/en-US/",
		linkTags: ["productive", "learning"],
	},
];

function D() {
	const [links, setLinks] = useState(INITIAL_LINKS);
	const [tags, setTags] = useState(["fun", "social", "learning", "productive"]);
	const [currLinks, setCurrLinks] = useState(links);

	const addLink = (newLink) => {
		setLinks([newLink, ...links]);
		setCurrLinks([newLink, ...currLinks]);
	};
	const addTag = (newTags) => {
		const filteredTags = newTags.filter((tag) => !tags.includes(tag));
		setTags([...filteredTags, ...tags]);
	};
	const changeLinks = (tag) => {
		const filteredLinks = links.filter((link) =>
			link.linkTags.includes(tag.target.value)
		);
		setCurrLinks(filteredLinks);
	};

	return (
		<section id="D" className="component">
			<h1>D - Bookmarks</h1>
			<LinkForm addLink={addLink} setLinks={setLinks} addTag={addTag} />
			<TagList tags={tags} changeLinks={changeLinks} />
			<StoredLinks links={currLinks} />
		</section>
	);
}

export default D;
