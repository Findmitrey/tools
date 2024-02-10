// export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';

// /*
//   api.user.getUser({ urlParam: {id: '1234' }})

//   api.getEndpoints()

// */

// type EndpointBuilder = Record<
//   string,
//   <TResponse, TParams>() => {
//     query: (params: TParams) => string;
//   }
// >;

// type CreateApiServiceProps<Endpoints extends EndpointBuilder> = {
//   endpoints: Endpoints;
// };

// const createApiService = <Endpoints extends EndpointBuilder>({
//   endpoints,
// }: CreateApiServiceProps<Endpoints>): Endpoints => {};

// const api = createApiService({
//   endpoints: (build)=> {
//     getPokemonByName: build.request<Record<string, unknown>, string>({
//       query: ({
//         pathParam: { name }
//       })=> `pokemon/${name}`
//     }),
//     createPokemon: build.request<Record<string, unknown>, string>({
//       query: ({
//         body
//       })=> {
//         url: 'pokemon',
//         method: 'POST',
//         body
//       },

//     }),
//   },
// });

//////////////////////

import type { ApiService, EndpointBuilder } from './types';

const createApiService = <Endpoints extends Record<string, unknown>>({
  endpoints,
}: {
  endpoints: (builder: EndpointBuilder) => Endpoints;
}): ApiService => {
  const apiEndpoints = endpoints({
    request: () => ({
      method: 'GET',
    }),
  });

  // const apiEndpoints = endpoints({
  //   request: <Params, Body, Response>(
  //     config: EndpointConfig<Params, Body, Response>,
  //   ): ApiEndpoint<Params, Body, Response> => ({
  //     query: (params: Params) => config.query(params),
  //     parse: (response: AxiosResponse) => config.parse(response),
  //   }),
  // });

  // const apiService = Object.keys(apiEndpoints).reduce(
  //   (acc, key) => ({
  //     ...acc,
  //     [key]: async (params) => {
  //       const endpoint = apiEndpoints[key];
  //       const query = endpoint.query(params);
  //       const response = await axios(query);

  //       return endpoint.parse(response);
  //     },
  //   }),
  //   {} as ApiService<Endpoints>,
  // );

  return apiService;
};

// Example usage

const api = createApiService({
  endpoints: (build) => ({
    getUserInfo: build.request<{ username: string }, null, unknown>({
      query: ({ username }) => ({
        url: 'pokemon',
        method: 'GET',
      }),
      parse: (response) => response.data,
    }),
  }),
});

const ap2i = createApiService({
  endpoints: (build) => ({
    getUserInfo: build.request<
      { username: string },
      null,
      { id: string; username: string }
    >({
      query: ({ username }) => ({
        url: `users/${username}`,
        method: 'GET',
      }),
      parse: (response) => response.data,
    }),
  }),
});

ap2i
  .getUserInfo({
    urlParams: 1,
    params: {
      id: '1',
    },
    data: { isAvailable: true },
  })
  .then((userInfo) => {
    console.log(userInfo);
  });
