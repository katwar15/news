import { useEffect, useState } from "react";
import axios from "axios";
import { API_KEY } from "../../helpers/helpers";
import { Typography, List } from "@mui/material";
import Article from "../Article/Article";
import { articleObj } from "../../helpers/interfaces";

// 64f7bbf082f64a6aaf48d8df0b8f8c8d

const HomePage = () => {
  // top scope
  const [todaysArticles, setTodaysArticles] = useState([]);

  useEffect(() => {
    const today = new Date();
    const day =
      today.getDate() - 1 > 10
        ? `0${today.getDate() - 1}`
        : today.getDate() - 1;
    const month =
      today.getMonth() + 1 > 10
        ? `0${today.getMonth() + 1}`
        : today.getMonth() + 1;
    const year = today.getFullYear();
    const date = `${year}-${month}-${day}`;

    axios
      .get(
        `https://newsapi.org/v2/everything?q=world&from=${date}&language=en&sortBy=popularity&apiKey=${API_KEY}`
        // znak zapytania - po nich parametry wpisujesz
        // & - do łączenia
      )
      .then((response) => {
        setTodaysArticles(response.data.articles);
      })
      .catch((err) => console.error(err.message));
    // 1. Stwórz stan todaysArticles (funckja aktualizujaca stan będzie sie
    // nazywala setTodaysArticles), wartość początkowa: [] (pusta lista)
    // 2. Do axios.get dopisz thena, w którym wrzucisz zwrócone z API dane do stanu todaysArticles
    // (dane o ktore nam chodzi to lista artykułow, jest ona zagnieżdzona na 2 poziome w responsie, najpierw wyloguj response i poszukaj)
    // 3. Dopisz catcha, w srodku console.log blad
    // 4. Zauważ różnice w działaniu axiosa i fetcha, zapisz tą różnice

    // funkcja aktualizujaca ma taką samą nazwe jak stan, ale z set
  }, []);

  // lista dependencji

  // montowanie = wyświetlenie
  // odmontowanie = zniknięcie
  // zmiane wartosci (zmiana propsa w kompencie, zmiana stanu w kompo, zmiana jakichkolwiek wartości)

  //1. nie podawać w ogóle
  //2. podawac pustą liste
  // 3. podac zapełnioną listę

  // Komponent Typography (MUI)
  // 1. Typography to komponent służący do wyświetlania tekstu
  // 2. Przyjmuje kilka ważnych atrybutów: variant="h2", component="h2", align="center", sx (atrybut wszystkich komponentów MUI,
  // i tylko komponentów MUI) to atrybut do którego możemy przekazać obiekt i pisać w nim CSS
  // p = padding, m = margin, mt = marginTop, mb = marginBottom, mx = margin w osi X (marginLeft + marginRight), my = margin w
  // osi Y (marginTop + marginBottom)
  // <Button
  //   variant="outlined"
  //   component="button"
  //   align="center"
  //   sx={{ display: "block", mx: "auto" }}
  // >12332112331</Button>;

  // Komponent List (MUI) = <ul> z HTML'a przystosowany tak, żeby łatwiej się go stylowało

  return (
    <>
      {/* Wyświetl Typography, ma wyglądać jak h2, ma być wyśrodkowany, wielkość 
    czcionki ma być ustawiona na 2rem, margines dolny ma być ustawiony .8rem, wyświetlany tekst: "Today's hottest news:" 
      Wyświetl List (komponent z MUI), ustaw jej szerokość na 100%, i wyśrodkuj jej kontent  */}
      <Typography
        variant="h2"
        align="center"
        // jedna klamra to od jsx a druga od obiektu
        sx={{ fontSize: "2rem", my: ".8rem" }}
      >
        Today's hottest news:
      </Typography>
      <List sx={{ width: "100%", align: "center" }}>
        {todaysArticles.length !== 0 &&
          todaysArticles.map((article: articleObj) => {
            return <Article todaysArticles={article} key={article.title} />;
          })}
      </List>
    </>
  );
};

export default HomePage;
