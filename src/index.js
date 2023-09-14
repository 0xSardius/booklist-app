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
    <section>
      <Book />
    </section>
  );
};

const Book = () => {
  return (
    <article>
      <Image />
      <Title />
      <Author />
    </article>
  );
};

const Image = () => {
  return <img src="" alt="" />;
};

const Title = () => {
  return <h2>Title</h2>;
};

const Author = () => {
  return <h4>Author</h4>;
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BookList />);
