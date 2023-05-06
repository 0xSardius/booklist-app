import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const books = [
  {
    title: "Hello Beautiful",
    author: "Ann Napolitano",
    img: "./images/book-cover-1.jpg",
    id: 1,
  },
  {
    title: "Dog Man: Twenty Thousand Fleas Under the Sea",
    author: "Dav Pilkey",
    img: "https://m.media-amazon.com/images/I/51VyW1qRmSL._SX329_BO1,204,203,200_.jpg",
    id: 2,
  },
];

const BookList = () => {
  return (
    <section className="booklist">
      {books.map((book, index) => {
        const { img, title, author, id } = book;

        return <Book {...book} img={img} key={book.id} />;
      })}
    </section>
  );
};

const Book = ({ book: { img, title, author } }) => {
  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author.toUpperCase()}</h4>
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BookList />);
