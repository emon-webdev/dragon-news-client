import React from "react";
import { useLoaderData } from "react-router-dom";
import NewsCard from "./Shared/NewsCard";

const Category = () => {
  const categoryNews = useLoaderData();
  return (
    <div>
      <h2>Category: {categoryNews.length}</h2>
      <div>
        {categoryNews.map((news) => (
          <NewsCard key={news._id} news={news} />
        ))}
      </div>
    </div>
  );
};

export default Category;
