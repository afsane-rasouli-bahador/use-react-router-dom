import React from "react";
import useFetch from "../hooks/useFetch";
import styled from "styled-components";
import { Link } from "react-router-dom";
const ArticleBox = styled.div`
  background-color: #333;
  padding: 0.2rem 1rem;
  border-radius: 10px;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 1rem;
`

function Home() {
  const {error, loading, data:articles} = useFetch('https://jsonplaceholder.typicode.com/users/1/posts');
  if(error) return <h2>Error: {error}</h2>;
  if(loading) return <h2>loading...</h2>;
  return (
    <div>
      <h1>My Articles</h1>
      {articles && (
        <div>
          {articles.map((article)=>(
            <ArticleBox key={article.id}>
              <h3>{article.title}</h3>
              <Link to={`/article/${article.id}`}>Read More...</Link>
            </ArticleBox>
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
