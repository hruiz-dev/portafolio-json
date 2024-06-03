export interface Basics {
  name: string;
  label: string;
  image: string;
  email: string;
  phone: string;
  summary: string;
  location: string;
  profiles: NetworkInfo[];
}

export interface NetworkInfo {
  network: string;
  url: string;
  username: string;
}