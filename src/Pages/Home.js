import React from "react";
import { useLoaderData } from "react-router-dom";
import NewsCard from "./Shared/NewsCard";

const Home = () => {
  const allNews = useLoaderData();

  return (
    <div>
      <h2>Dragon News: {allNews.length}</h2>
      {allNews.map((news) => (
        <NewsCard key={news._id} news={news} />
      ))}
    </div>
  );
};

export default Home;
