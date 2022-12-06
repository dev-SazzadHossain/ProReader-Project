import React from "react";
import About from "../About/About";
import img from "../../../images/6.jpg";
import { Typewriter } from "react-simple-typewriter";
const Home = () => {
  return (
    <div>
      <div className="type w-[1120px] mx-auto font-extralight text-2xl text-center">
        <p>
          <span style={{ color: "red", fontWeight: "bold" }}>
            {/* Style will be inherited from the parent element */}
            <Typewriter
              words={["ProReader!"]}
              loop={Infinity}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </span>
        </p>
      </div>
      <div className="home__container bg-red-400 w-[1120px] mx-auto  ">
        <div className="home__wrapper flex justify-around items-center  h-[80vh]">
          <div className="box__wrapper1  bg-red-500 h-[200px] w-[200px] flex justify-center items-center rounded-3xl shadow-zinc-900 shadow shadow-lg animate-bounce transition-all">
            <span className="home__box1 text-2xl font-semibold text-white shadow-lg shadow shadow-green-600 pr-2 animate-spin">
              Pro
            </span>
            <span className="home__box1 text-2xl font-semibold text-white shadow-lg shadow shadow-green-600 pr-2 antialiased">
              Reader
            </span>
          </div>
          <div className="box__wrapper2">
            <div className="box__1  bg-red-500 h-[200px] w-[200px] flex justify-center items-center rounded-3xl shadow-zinc-900 shadow shadow-lg animate-bounce transition-all">
              <span className="home__box1 text-2xl font-semibold text-white shadow-lg shadow shadow-green-600 pr-2 animate-spin">
                Pro
              </span>
              <span className="home__box1 text-2xl font-semibold text-white shadow-lg shadow shadow-green-600 pr-2 antialiased">
                Reader
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
