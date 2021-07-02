export const API_URL = 'https://integra1.solutions.webfg.ch/restweb';

export const TOKEN_DATA = {
  micro: '/oauth/token',
  user: {
    username: 'test001',
    password: 'ryby3NTyKduAMcvZ',
  },
};

export enum TOKEN_SCOPE_TYPES {
  USER = 'uaa.user',
  ADMIN = 'uaa.admin',
}

export enum TOKEN_GRANT_TYPES {
  PASSWORD = 'password',
  EBANKING = 'ebanking',
}
