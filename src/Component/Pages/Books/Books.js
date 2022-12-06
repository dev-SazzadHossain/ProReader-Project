import React from "react";
import { useLoaderData } from "react-router-dom";
import BookDetails from "../BookDetails/BookDetails";

const Books = () => {
  const Books = useLoaderData();
  const allBooks = Books.books;
  console.log(allBooks);
  return (
    <div className="mt-3 gap-3 grid grid-cols-3 w-[1120px] mx-auto">
      {allBooks.map((singleBook) => (
        <BookDetails key={singleBook.isbn13} singleBook={singleBook} />
      ))}
    </div>
  );
};

export default Books;
