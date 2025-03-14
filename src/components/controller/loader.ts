import { IApiKey, IDataNews, IGetResp } from "../../types";
import { TResMethod, TEndpoints } from "../../types";

interface IOptions extends IApiKey {
  [index: string]: string | undefined,
}



interface IResponseStatus {
    ok: boolean,
    status: number,
    statusText: string,
    json: ()=>object
}


class Loader {
    baseLink: string | undefined;
    options: IApiKey;

    constructor(baseLink: string| undefined, options: IApiKey) {
        this.baseLink = baseLink;
        this.options = options;
    }

    getResp(
        { endpoint, options = {} }: IGetResp,
        callback = () => {
            console.error('No callback for GET response');
        }
    ) {
        this.load('GET', endpoint, callback, options);
    }

    errorHandler(res: IResponseStatus) {
        if (!res.ok) {
            if (res.status === 401 || res.status === 404)
                console.log(`Sorry, but there is ${res.status} error: ${res.statusText}`);
            throw Error(res.statusText);
        }

        return res;
    }

    makeUrl(options: object, endpoint: TEndpoints) {
        const urlOptions: IOptions = { ...this.options, ...options };
        let url = `${this.baseLink}${endpoint}?`;

        Object.keys(urlOptions).forEach((key) => {
            url += `${key}=${urlOptions[key]}&`;
        });

        return url.slice(0, -1);
    }

    load(method: TResMethod, endpoint: TEndpoints, callback: (data?:IDataNews)=>void, options = {}): void {
        fetch(this.makeUrl(options, endpoint), { method })
            .then(this.errorHandler)
            .then((res) => res.json())
            .then((data) => callback(data))
            .catch((err) => console.error(err));
    }
}

export default Loader;
