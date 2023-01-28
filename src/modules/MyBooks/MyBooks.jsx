import { Component } from "react";
import { nanoid } from "nanoid";

import BookList from "./BookList/BookList.jsx";
import BooksFilter from "./BookFilter/BookFilter";
import MyBooksForm from "./MyBooksForm/MyBooksForm";

import items from "./items.js";

import styles from "./my-books.module.scss";

class MyBook extends Component {
    state = {
        items: [...items],
        filter: "",
    }

    addBook = ({title, author}) => {
        
        this.setState(prevState =>{
            const { items } = prevState;
            if (this.isDublicate(title, author)) {
                return alert(`${title}. Author: ${author} is already exist`);
            }
            const newBook = {
                id: nanoid(),
                title,
                author,
            }
             return {items: [newBook, ...items]}
        })
    }

    handleFilter() {
        this.setState({filter: EventTarget.value})
    }

    removeBook = (id) =>{
        this.setState(({items}) => {
            const newBook = items.filter(item => item.id !== id);
            return {items: newBook}
        })
    }
    
    isDublicate(title, author) {
        const normalizedTitle = title.toLowerCase();
        const normalizedAuthor = author.toLowerCase();
        const { items } = this.state;
        const result = items.find(({ title, author }) => {
            return (title.toLocaleLowerCase() === normalizedTitle && author.toLowerCase() === normalizedAuthor)
        })
        return Boolean(result);
    }

    getFilteredItems() {
        const { filter, items } = this.state;
        if (!filter) {
            return items;
        }
        const normalizedFilter = filter.toLowerCase();
        const result = items.filter(({ title, author }) => {
            return(title.toLowerCase().includes(normalizedFilter) || author.toLowerCase().includes(normalizedFilter))
        })
        return result;
    }

    render() {
        const { addBook, removeBook, handleFilter } = this;
        const items = this.getFilteredItems();
        const isAvailble = Boolean(items.length);
        //console.log(items);
        return (
            <div>
                <h3>My Books</h3>
                <div className={styles.wrapper}>
                    <div className={styles.block}>
                        <h4>Add book</h4>
                        <MyBooksForm onSubmit={addBook}/>
                    </div>
                    <div className={styles.block}>
                        <BooksFilter handleChange={handleFilter} />
                        {isAvailble && <BookList removeBook={removeBook} items={items} />}
                        {!isAvailble && <p>There are no books. Try again</p>}
                    </div>
                </div>
            </div>
        )
    }
}

export default MyBook;