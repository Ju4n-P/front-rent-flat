import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { v4 as uuid } from "uuid";
import api from "../../services/FlatsApi";
import "./CrudFlats.scss";
import AddArticle from "./CreateArticle";
import ArticleList from "./ArticleList";
import ArticleDetail from "./ArticleDetail";
import UpdateArticle from "./UpdateArticle";

const CrudFlats = () => {
  const [articles, setArticles] = useState([]);

  //RetrieveArticles
  const retrieveArticles = async () => {
    const response = await api.get("/articles");
    return response.data;
  };

  const addArticleHandler = async (article) => {
    console.log(article);
    const request = {
      id: uuid(),
      ...article,
    };

    const response = await api.post("/articles", request);
    console.log(response);
    setArticles([...articles, response.data]);
  };

  const updateArticleHandler = async (article) => {
    const response = await api.put(`/articles/${article.id}`, article);
    const { id, title, content } = response.data;
    setArticles(
      articles.map((article) => {
        return article.id === id ? { ...response.data } : article;
      })
    );
  };

  const removeArticleHandler = async (id) => {
    await api.delete(`/articles/${id}`);
    const newArticleList = articles.filter((article) => {
      return article.id !== id;
    });

    setArticles(newArticleList);
  };

  useEffect(() => {
    const getAllArticles = async () => {
      const allArticles = await retrieveArticles();
      if (allArticles) setArticles(allArticles);
    };

    getAllArticles();
  }, []);

  useEffect(() => {}, [articles]);

  return (
    <div className="ui container">
      <Link
        to="ar/"
        exact
        render={(props) => (
          <ArticleList
            {...props}
            articles={articles}
            getArticleId={removeArticleHandler}
          />
        )}
      />
      <Link
        to="/add"
        render={(props) => (
          <AddArticle {...props} addArticleHandler={addArticleHandler} />
        )}
      />

      <Link
        to="/edit"
        render={(props) => (
          <UpdateArticle
            {...props}
            updateArticleHandler={updateArticleHandler}
          />
        )}
      />

      <Link to="/article/:id" component={ArticleDetail} />
    </div>
  );
};

export default CrudFlats;
