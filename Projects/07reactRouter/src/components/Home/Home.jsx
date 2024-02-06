import React from "react";
import { Link } from "react-router-dom";
import Hamburger from "../Hamburger/Hamburger";

export default function Home() {
  return (
    <div className="mx-auto w-full max-w-7xl">
      <aside className="relative overflow-hidden text-black rounded-lg sm:mx mx-2 sm:py-8">
        <div className=" z-10 max-w-screen-xl px-4  pb-20  mx-auto sm:px- lg:px-1">
          <div className="max-w-lg sm:mt-1 mt-80 space-y-8 text-center sm:text-right sm:ml-auto">
            {/* <h2 className="text-4xl font-bold sm:text-5xl">
              Download Now
              <span className="hidden sm:block text-4xl">Lorem Ipsum</span>
            </h2> */}

            <img
              className=""
              src="https://qph.cf2.quoracdn.net/main-qimg-3998f08372833ead5d352f68c52da902.webp"
              alt="image1"
            />

            {/* <Link
              className="inline-flex text-white items-center px-6 py-3 font-medium bg-orange-700 rounded-lg hover:opacity-75"
              to="/"
            >
              <svg
                fill="white"
                width="24"
                height="24"
                xmlns="http://www.w3.org/2000/svg"
                fillRule="evenodd"
                clipRule="evenodd"
              >
                <path d="M1.571 23.664l10.531-10.501 3.712 3.701-12.519 6.941c-.476.264-1.059.26-1.532-.011l-.192-.13zm9.469-11.56l-10.04 10.011v-20.022l10.04 10.011zm6.274-4.137l4.905 2.719c.482.268.781.77.781 1.314s-.299 1.046-.781 1.314l-5.039 2.793-4.015-4.003 4.149-4.137zm-15.854-7.534c.09-.087.191-.163.303-.227.473-.271 1.056-.275 1.532-.011l12.653 7.015-3.846 3.835-10.642-10.612z" />
              </svg>
              &nbsp; Download now
            </Link> */}
          </div>
        </div>

        <div className="absolute inset-0 w-full sm:my-20 sm:pt-1 pt-12 h-full ">
          {/* <img
            className="w-96"
            src="https://i.ibb.co/5BCcDYB/Remote2.png"
            alt="image1"
          /> */}
          <div className="">
            <h3 className="text-orange-700 text-center sm:flex sm:justify-start text-sm uppercase font-semibold mb-4 text-primary tracking-[4px]">
              FULL STACK ENGINEER
            </h3>

            <h1 className=" text-5xl sm:text-7xl font-bold mt-4 text-center sm:flex sm:justify-start">
              Hi, my name is
            </h1>
            <h1 className=" text-7xl sm:text-7xl  font-bold my-4 text-center sm:flex sm:justify-start">
              Abhishek Swami
            </h1>

            <p className="subtitle max-w-[490px] ml-0 mx-auto xl:max-0 text-center sm:text-start sm:flex sm:justify-start">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum
              odit animi dolore non aspernatur, minima dolor odio in commodi aut
              explicabo quasi perferendis aperiam officia. Animi pariatur porro
              fugiat minima.
            </p>

            <div className="flex justify-center sm:justify-start gap-4 mt-8">
              <button className="bg-orange-600 text-white cursor-pointer p-4 px-8 border rounded-full hover:bg-orange-700 font-bold">
                Contact Me
              </button>
              <button className="bg-gray-600 text-white cursor-pointer p-4 px-8 border font-bold rounded-full hover:bg-gray-700 ">
                Download CV
              </button>
            </div>
          </div>
        </div>
      </aside>

      {/* <div className="grid  place-items-center sm:mt-20">
        <img
          className="sm:w-96 w-48"
          src="https://i.ibb.co/2M7rtLk/Remote1.png"
          alt="image2"
        />
      </div> */}

      <h1 className="text-center text-2xl sm:text-5xl py-10 font-medium">
        Lorem Ipsum Yojo
      </h1>
      <h1 className="text-center text-2xl sm:text-5xl py-10 font-medium">
        Lorem Ipsum Yojo
      </h1>
      <h1 className="text-center text-2xl sm:text-5xl py-10 font-medium">
        Lorem Ipsum Yojo
      </h1>
    </div>
  );
}
