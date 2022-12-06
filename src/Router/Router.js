import { createBrowserRouter } from "react-router-dom";
import About from "../Component/Pages/About/About";
import BookInfo from "../Component/Pages/BookInfo/BookInfo";
import Books from "../Component/Pages/Books/Books";
import Home from "../Component/Pages/Home/Home";
import Login from "../Component/Pages/Login/Login";
import Register from "../Component/Pages/Register/Register";
import Main from "../Main/Main";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "books",
        element: <Books />,
        loader: () => {
          return fetch("https://api.itbook.store/1.0/new");
        },
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "bookinfo/:id",
        element: <BookInfo />,
        loader: ({ params }) => {
          return fetch(`https://api.itbook.store/1.0/books/${params.id}`);
        },
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },
]);
