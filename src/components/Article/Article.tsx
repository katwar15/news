import React from "react";
import { ArticleProps } from "../../helpers/interfaces";
import { ListItem, ListItemText, Card } from "@mui/material";

const Article: React.FC<ArticleProps> = ({ todaysArticles }) => {
  return (
    <ListItem>
      <Card variant="outlined" sx={{ mb: "10px" }}>
        {/* Card to komponent w tym przypadku do wyswietlenia */}
        {/* obrazek i tytuł artykułu: */}
        <a
          href={todaysArticles.url}
          style={{ textDecoration: "none" }}
          target="__blank"
        >
          <img
            src={todaysArticles.urlToImage}
            alt={todaysArticles.title}
            style={{ width: "100%" }}
          ></img>
          <ListItemText sx={{ color: "black" }}>
            {todaysArticles.title}
          </ListItemText>
        </a>
      </Card>
    </ListItem>
  );
};
// style do elemntów html
// sx do elementów z mui

export default Article;
