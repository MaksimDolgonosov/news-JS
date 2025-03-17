export interface IApiKey {
  apiKey: string | undefined,
  
};

export type TResMethod = "GET" | "PUT";
export type TEndpoints = "sources" | "everything";

export interface IGetResp {
    endpoint: TEndpoints,
    options?: Object
};

export interface IDataNews {
    sources?: String[],
    articles?: IArticlesData[]
};


export interface IArticlesData {
  source: {
    id: string,
    name: string
  },
  author: string,
  title: string,
  description: string,
  url: string,
  urlToImage: string,
  publishedAt: string,
  content: string
}

export interface ISourcesData {
  id: string,
name: string,description: "Your trusted source for breaking news, analysis, exclusive interviews, headlines, and videos at ABCNews.com.",url: "https://abcnews.go.com",category: "general",language: "en",country: "us"
}