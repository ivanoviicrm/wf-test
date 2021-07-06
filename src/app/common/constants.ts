export const API_URL = 'https://integra1.solutions.webfg.ch/restweb';

export const TOKEN_DATA = {
  micro: '/oauth/token',
  user: {
    username: 'test001',
    password: 'ryby3NTyKduAMcvZ',
  },
};

export const QUOTES_DATA = {
  micro: '/quotes/2970161-1058-814',
  fields: [
    'LVAL_NORM',
    'CLOSE_ADJ_NORM',
    'NC2_PR_NORM',
    'NC2_NORM',
    'VOL',
    'TUR',
    'PY_CLOSE',
    'YTD_PR_NORM',
  ],
};

export enum TOKEN_SCOPE_TYPES {
  USER = 'uaa.user',
  ADMIN = 'uaa.admin',
}

export enum TOKEN_GRANT_TYPES {
  PASSWORD = 'password',
  EBANKING = 'ebanking',
}
