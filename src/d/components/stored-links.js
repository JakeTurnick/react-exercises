import Link from "./link";

function StoredLinks(props) {
    const linksHTML = props.links.map(link => 
        <Link link={link} key={link.key}/>    
    )

    return (
        <ul>
            {linksHTML}
        </ul>
    )
}

export default StoredLinks;