import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";

const NewsBoard = () => {
  const [article, setArtical] = useState([]);

  const fetchData = () => {
    fetch(
      "https://newsapi.org/v2/top-headlines?country=us&apiKey=fbd26ddd25b6443c887fddc518d8e771"
    )
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setArtical(res.articles);
      });
  };

  useEffect(() => {
    fetchData();
  });

  return (
    <div>
      <h2 className="text-center">Latest News</h2>

      {article.map((news, i) => {
        return (
          <NewsItem
            key={i}
            title={news.title}
            decription={news.description}
            src={news.urlToImage}
            url={news.url}
          />
        );
      })}
    </div>
  );
};

export default NewsBoard;
