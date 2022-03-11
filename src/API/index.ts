export const axios = require("axios").default;

// Make a request for a user with a given ID

const instance = axios.create({
  baseURL: "https://api.github.com/search/repositories?q=",
});

export const API = {
  getRepos(searchRequest: string) {
    return instance.get(searchRequest);
  },
};

export type ItemType = {
  id: number;
  full_name: string;
  owner: {
    login: string;
    avatar_url: string;
  };
  html_url: string;
  description: string;
  watchers: number;
  ssh_url: string;
  clone_url: string;
  created_at: string;
};
export type ResponseType = {
  data: {
    total_count: number;
    incomplete_results: boolean;
    items: ItemType[];
  };
  status: number;
  statusText: string;
};
