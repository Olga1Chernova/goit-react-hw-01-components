import styles from "../my-books.module.scss";

const BookList = ({ removeBook, items }) => {
     const books = items.map(({id, title, author}) => <li key={id}>{title}. Author: {author}. 
         <button onClick={() => this.removeBook(id)} type="button">Delete</button></li>);
    
    return (
        <ol className={styles.bookList}>
            {books}
        </ol>
    )
}

export default BookList;

BookList.defaultProps = {
    items: []
}