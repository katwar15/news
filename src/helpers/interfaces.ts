export interface articleObj {
  url: string;
  urlToImage: string;
  title: string;
}
export interface ArticleProps {
  art: articleObj;
  key: string;
}

export interface RegisterFormData {
  email: string;
  password: string;
  password2: string;
}

export interface LoginFormData {
  email: string;
  password: string;
}

export interface NavBarProps {
  loggedIn: boolean;
}

export interface ProfilePhotoFormData {
  profilePhotoList: FileList;
}

export interface SearchFormProps {
  keyword: string;
}

export interface SetKeyword {
  setKeyword: (value: string) => void;
}
