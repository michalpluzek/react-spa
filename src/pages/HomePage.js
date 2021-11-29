import React from "react";

import Article from "../components/Article";

const articles = [
  {
    id: 1,
    title: "Czym jest teoria strun",
    author: "Jan Nowak",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime sed nesciunt obcaecati itaque, incidunt doloribus debitis qui modi perferendis earum, eaque deleniti quibusdam, odit corporis consectetur dolor quam officia nisi.",
  },
  {
    id: 2,
    title: "Czym jest paradoks fermiego",
    author: "Jan Kowalski",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime sed nesciunt obcaecati itaque, incidunt doloribus debitis qui modi perferendis earum, eaque deleniti quibusdam, odit corporis consectetur dolor quam officia nisi.",
  },
  {
    id: 3,
    title: "Ciemna materia a ciemna energia",
    author: "Anna Kwiatkowska",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime sed nesciunt obcaecati itaque, incidunt doloribus debitis qui modi perferendis earum, eaque deleniti quibusdam, odit corporis consectetur dolor quam officia nisi.",
  },
];

const HomePage = () => {
  const artList = articles.map((article) => (
    <Article key={article.id} {...article} />
  ));

  return <div className="home">{artList}</div>;
};

export default HomePage;
