import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const BookInfo = () => {
  const bookInfo = useLoaderData();
  const { image, authors, language, pages, price } = bookInfo;
  console.log(bookInfo);
  return (
    <div>
      <div className="about__section w-[1120px] mx-auto flex py-10 justify-center items-center ">
        <div className="box3 w-[600px] h-[70vh] py-10 bg-[#7d7b7b]  flex justify-center items-center rounded-lg shadow-2xl shadow-slate-700">
          <div className="images w-[300px]">
            <img className="h-[300px]" src={image} alt="img" />
          </div>
          <div className="description w-[300px] text-white font-serif relative ">
            <h3>Authors : {authors}</h3>
            <h4>Language : {language}</h4>
            <h5>Pages : {pages}</h5>
            <h3>price : {price}</h3>
            <Link to={"/books"}>
              <div className="icons text-center mr-4 px-5 py-2 bg-neutral-500 w-[60px] absolute right-0 hover:bg-red-400 duration-700 cursor-pointer shadow-2xl shadow-stone-50 rounded-lg">
                >
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookInfo;
