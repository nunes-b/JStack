import React from "react";
import Post from "./Post";
import Header from "./Header";
const category = "Posts da semana";
const post = {
  title: "Primeiro post",
  subtitle: "Subtítulo do primeiro post",
  content: "Conteúdo bla bla bla do primeiro post",
  date: "01/01/2021",
}
function App() {
  return (
    <React.Fragment>
      <Header title = "Meu blog" >
        <h2>{category}</h2>
      </Header>
      <hr />
    <Post title={post.title} subtitle={post.subtitle} content={post.content} date={post.date} />
    <Post />
    </React.Fragment>
  );
}

export default App;
