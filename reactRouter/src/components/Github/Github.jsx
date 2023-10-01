import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";

function Github() {
  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   fetch("https://api.github.com/users/Junaid-Hashmi")
  //     .then((res) => res.json())
  //     .then((data) => setData(data));
  // });

  const data = useLoaderData();

  return (
    <div className="bg-gray-600 text-white p-4 m-4 text-2xl flex items-center justify-center gap-6">
      <img className="w-48" src={data.avatar_url} alt="github-profile" />
      <h3>Github Followers: {data.followers}</h3>
    </div>
  );
}

export default Github;

export const githubInfoLoader = async () => {
  const res = await fetch("https://api.github.com/users/Junaid-Hashmi");
  return res.json();
};
