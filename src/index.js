import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const BookList = () => {
  return (
    <section className="booklist">
      <Book />
    </section>
  );
};

const Book = () => {
  const title = "Hello Beautiful";
  const author = "Ann Napolitano";

  return (
    <article className="book">
      <img src="./images/book-cover-1.jpg" alt="Hello Beautiful Novel Cover" />
      <h2>{title}</h2>
      <h4>{author.toUpperCase()}</h4>
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BookList />);
