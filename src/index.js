import React from 'react';
import ReactDOM from 'react-dom/client';

import './css/index.css';
import { books } from './books';
import Book from './Book';

const BookList = () => {
    return (
        <>
            <h1 className='title'>Best Sellers in Books</h1>
            <section className="booklist">
                {books.map((book, index) => {
                    return <Book {...book} key={book.id} index={index} />
                })}
            </section>
        </>
    )
};

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<BookList />)
