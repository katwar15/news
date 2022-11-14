export interface articleObj {
  url: string;
  urlToImage: string;
  title: string;
}
export interface ArticleProps {
  todaysArticles: articleObj;
  key: string;
}

export interface RegisterFormData {
  email: string;
  password: string;
  password2: string;
}
