import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

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

const Image = () => (
  <img
    src="https://m.media-amazon.com/images/I/51YGx8qVVXL.jpg"
    alt="Hello Beautiful Novel Cover"
  />
);
const Title = () => <h2>Hello Beautiful</h2>;
const Author = () => {
  return <h4>Ann Napolitano</h4>;
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BookList />);
