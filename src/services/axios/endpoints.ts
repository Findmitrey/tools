export type EndpointType = {
  [key in string]:
    | EndpointType
    | string
    | (<T extends string>(id: T) => string);
};

export const Endpoint = {
  auth: {
    login: 'Login/do-login',
    logout: 'Login/logout',
  },
  user: {
    info: 'User/info',
    inventory: {
      availableSkinList: 'User/inventory/available-skins',
      orderedSkinList: 'User/inventory/ordered-skins',
    },
  },
} as const satisfies EndpointType;

export const getUsers = () => {};
