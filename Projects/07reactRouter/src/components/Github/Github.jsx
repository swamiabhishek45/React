import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {

  const data = useLoaderData();

  // const [data, setData] = useState([]);
  // useEffect(() => {
  //   fetch("https://api.github.com/users/swamiabhishek45")
  //     .then(response => response.json())
  //     .then((data) => {
  //       setData(data);
  //     });
  // }, []);
  return (
    <>
    <div className="bg-gray-700 text-white p-4 text-3xl text-center flex flex-col justify-center items-center gap-4">
      Github Followers: {data.followers}
      <img src={data.avatar_url} alt="sit pic" width={300} className="" />
    </div>
    </>
  );
}

export default Github;

export const githubInfoLoader = async () =>{
  const response = await fetch("https://api.github.com/users/swamiabhishek45")
  return response.json();

}
