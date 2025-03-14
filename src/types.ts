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
    articles?: String[]
};