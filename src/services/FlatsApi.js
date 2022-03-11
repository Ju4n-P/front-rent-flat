

// import axios from "axios";

// export default axios.create({
//   baseURL: "https://api-rails-immocoin.herokuapp.com/articles",
// });

import React, { useEffect, useState } from 'react';

const FetchApi = () => {
  const [dataArticle, setDataArticle] = useState();

  useEffect(() => {
    fetch("https://api-rails-immocoin.herokuapp.com/articles")
    .then(response => {
      console.log(response);
      return response.json();
    })
    .then(data => {
      setDataArticle(data)
      console.log(data);
    })
  })

  return (
    <div>
      {dataArticle}
    </div>
  );
};

export default FetchApi;