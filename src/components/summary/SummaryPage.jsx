
import React, { useState, useEffect } from 'react';
import { fetchNewsData } from '../../utils/api';
import Summary from '../summary/Summary';
import { useParams } from "react-router-dom";

const SummaryPage = () => {
  const [newsData, setNewsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const { id } = useParams();


  useEffect(() => {
    const getNews = async () => {
      try {
        const data = await fetchNewsData();
        setNewsData(data);
        setLoading(false);
      } catch (error) {
        setError(true);
      }
    };
    getNews();
  }, []);

  if (error) {
    return <p>Error fetching data</p>;
  }

  if (loading) {
    return <p>Loading...</p>;
  }

  //decodeURIComponent(id) to enable the use of special characters in the url so that the route can be accessed
  const selectedNewsItem = newsData.find(newsItem => newsItem.id === decodeURIComponent(id));
  
  return (
    <div>
      <Summary
        img={selectedNewsItem.fields.thumbnail}
        headline={selectedNewsItem.fields.headline}
        bodyText={selectedNewsItem.fields.bodyText}
        link={selectedNewsItem.webUrl}
      />
    </div>
  );
};

export default SummaryPage;