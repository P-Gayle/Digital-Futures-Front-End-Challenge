// import mockNewsData from '../../mockNewsData.json';
// const newsData = mockNewsData.response.results

import Headline from '../Headline/Headline';
import React, { useState, useEffect } from 'react';
import { fetchNewsData } from '../../utils/api';

const AllHeadlines = () => {
  const [newsData, setNewsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

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

  const headlineDisplay = newsData.map(newsItem => (

      <Headline
      key={newsItem.id}
      id={newsItem.id}
        img={newsItem.fields.thumbnail}
        headline={newsItem.fields.headline}
        />
  
  ));

  return <>{headlineDisplay}</>;
};

export default AllHeadlines;