import React, { useEffect, useState } from "react";
import appwriteService from "../appwrite/config";
import { Container, PostCard } from "../components";

function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    appwriteService.getPosts().then((posts) => {
      if (posts) {
        setPosts(posts.documents);
      }
    });
  }, []);

  if (posts.length === 0) {
    return (
      <div className="w-full bg-black">
        <Container>
          <div className="  relative isolate z-0 px-6 lg:px-8">
            <div className="relative mx-auto max-w-2xl py-28 pb-52">
              <div className="absolute inset-x-0 -top-[4rem] -z-10 transform-gpu overflow-hidden blur-3xl md:-top-[10rem]">
                <svg
                  className="relative left-[calc(50%-11rem)] -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-30rem)] sm:h-[42.375rem] mt-4"
                  viewBox="10 50 1155 678"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)"
                    fillOpacity=".3"
                    d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
                  />
                  <defs>
                    <linearGradient
                      id="45de2b6b-92d5-4d68-a6a0-9b9b2abad533"
                      x1="1155.49"
                      x2="-78.208"
                      y1=".177"
                      y2="474.645"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#9089FC" />
                      <stop offset={1} stopColor="#FF80B5" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <div className="text-center">
                <h1 className="text-4xl font-bold tracking-tight text-gray-300 sm:text-6xl">
                  Meet TreeTopTales: Your new home to write anything
                </h1>
                <p className="mt-6 text-lg leading-8 text-gray-500">
                  Write your personal thoughts alog with photos. Create a unique and beautiful blog. It's easy and free.
                </p>
                <div className="mt-10 flex items-center justify-center gap-x-2">
                  <button
                    type="button"
                    className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                  >
                    View Docs
                  </button>
                  <button
                    type="button"
                    className="rounded-md border border-white px-3 py-2 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                  >
                    Get Started
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    );
  }
  return (
    <div className="w-full py-8 bg-black">
      <Container>
        <div className="flex flex-wrap">
          {posts.map((post) => (
            <div key={post.$id} className="p-2 w-1/4">
              <PostCard {...post} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default Home;
