import styles from "../my-books.module.scss";

const BooksFilter = ({handleChange}) => {
    return (
        <div className={styles.formWrapper}>
            <label>Filter books</label>
            <input name="filter" onChange={handleChange} placeholder="Filter books" />
        </div>
    )
}

export default BooksFilter;