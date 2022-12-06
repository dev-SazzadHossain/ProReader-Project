import React from "react";
import { Link } from "react-router-dom";

const BookDetails = ({ singleBook }) => {
  const { title, price, isbn13, image, subtitle } = singleBook;
  return (
    <div>
      <div className="books__items">
        <div className="boos__details p-4 bg-black rounded-lg h-full text-center text-white">
          <img
            className="w-full hover:scale-105 duration-300 rounded-md cursor-pointer"
            src={image}
            alt=""
          />
          <h2 className="books__title">{title}</h2>
          <Link to={`../bookinfo/${isbn13}`}>
            <button
              type="submit"
              className="mt-2 py-2 text-black hover:bg-red-500 duration-500 rounded-3xl px-6 bg-slate-300"
            >
              Book Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
