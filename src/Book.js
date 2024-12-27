const Book = ({ img, title, author, index }) => {
    return (
        <article className="book">
            <Tag index={index+1}/>
            <img src={img} alt={title} />
            <h2>{title}</h2>
            <h4>{author.toUpperCase()}</h4>
        </article>
    )
};

const Tag = ({ index }) => {
    return <span className="tag">#{index}</span>
}

export default Book;