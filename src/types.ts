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
    sources?: ISourcesData[] | [],
    articles?: IArticlesData[] | []
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
  name: string,
  description: string,
  url: string,
  category: string,
  language: string,
  country: string
}

export enum Endpoints {
  SOURCES = "sources",
  EVERYTHING = "everything"
}