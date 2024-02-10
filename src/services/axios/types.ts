import type { AxiosRequestConfig, AxiosResponse } from 'axios';

export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';

// export type ApiEndpoint<Params, Body, Response> = {
//   query: (params: Params) => AxiosRequestConfig;
//   parse: (response: AxiosResponse) => Response;
// };

// export type ApiEndpoints<Endpoints> = {
//   [K in keyof Endpoints]: (
//     params: Endpoints[K]['Params'],
//   ) => Promise<Endpoints[K]['Response']>;
// };

// export type ApiService<Endpoints> = {
//   [K in keyof Endpoints]: ApiEndpoints<Endpoints>[K];
// };

export type EndpointConfig<Params, Body, Response> = {
  query: (params: Params) => AxiosRequestConfig;
  parse: (response: AxiosResponse) => Response;
};

export type EndpointBuilder = {
  request: <Params, Body, Response>(
    config: EndpointConfig<Params, Body, Response>,
  ) => unknown;
};

export type ApiService = {
  getUserInfo: (params: {
    urlParams: number;
    params: {
      id: string;
    };
    data: {
      isAvailable: boolean;
    };
  }) => Promise<number>;
};
