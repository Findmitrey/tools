export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';

export type PathParam<Path extends string> =
  Path extends `${infer L}/${infer R}`
    ? PathParam<L> | PathParam<R>
    : Path extends `{${infer Param}}`
      ? Param extends `${infer Optional}?`
        ? Optional
        : Param
      : never;

export type Endpoint<
  TParams extends Record<string, unknown>,
  TData extends Record<string, unknown>,
> = {
  url: string;
  method: HttpMethod;
  params?: TParams;
  data?: TData;
};

export type Endpoints = {
  getUser: Endpoint<{ userId: string }>;
  createUser: Endpoint<undefined, { name: string; email: string }>;
  // other endpoints...
};

export type ApiResponse<T> = {
  data: T;
};

type EndpointsConfig = {
  readonly getUser: Readonly<{
    url: string;
    method: HttpMethod;
  }>;
};

type G = PathParam<'user/userId'>;

const Endpoints = <T extends EndpointsConfig>(config: T): T => {};

const b = Endpoints({
  getUser: {
    url: 'user/{userId}',
    method: 'GET',
  },
});

const setEndpoint = () => {};

// const createApiService = <T extends Record<string, Endpoint<any, any>>>(
//   endpoints: T,
// ) => {
//   const makeRequest = async <TResponse>(
//     endpoint: Endpoint<any, any>,
//   ): Promise<TResponse> => {
//     const { url, method, params, data } = endpoint;

//     try {
//       const response: AxiosResponse<ApiResponse<TResponse>> = await axios({
//         url,
//         method,
//         params,
//         data,
//       });

//       return response.data.data;
//     } catch (error) {
//       throw new Error(`API request failed: ${error.message}`);
//     }
//   };

//   return Object.keys(endpoints).reduce(
//     (acc, key) => {
//       const endpoint = endpoints[key as keyof T];

//       acc[key] = (request?: Omit<Endpoint<any, any>, 'url' | 'method'>) =>
//         makeRequest(endpoint);

//       return acc;
//     },
//     {} as {
//       [K in keyof T]: (
//         request?: Omit<Endpoint<any, any>, 'url' | 'method'>,
//       ) => Promise<any>;
//     },
//   );
// };

// // Define your endpoints
// const endpoints: Endpoints = {
//   getUser: { url: '/users/{userId}', method: 'GET' },
//   createUser: { url: '/users', method: 'POST' },
// };

// const api = createApiService(endpoints);

// const userId = '123';
// const user = await api.getUser({ params: { userId } });

// const newUser = await api.createUser({
//   data: { name: 'John Doe', email: 'john@example.com' },
// });
