import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useFetch from "./hooks/useFetch";

function Article() {
  const { id } = useParams();
  const { error, loading, data: article } = useFetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );
  const navigate = useNavigate();

  useEffect(() => {
    if (error) {
      setTimeout(() => {
        navigate('/');
      }, 2000);
    }
  }, [error, navigate]);

  if (loading) return <p>Loading...</p>;
  if (error)
    return (
      <div>
        <p>Error: {error.message || "An unknown error occurred"}</p>
        <p>You will be redirected to the homepage in 2 seconds...</p>
      </div>
    );

  return (
    <div>
      <h2>{article.title}</h2>
      <p>{article.body}</p>
    </div>
  );
}

export default Article;
