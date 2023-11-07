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

const Book = ({ img, title, author }) => {
  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author}</h4>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus,
        nesciunt? Ipsum ut itaque maxime et porro sunt ex reprehenderit
        deleniti.
      </p>
      <button>Click Me</button>
    </article>
  );
};

const BookList = () => {
  return (
    <section className="booklist">
      {books.map((book) => {
        return <Book key={book.id} {...book}></Book>;
      })}
    </section>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BookList />);
