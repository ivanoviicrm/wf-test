import { TOKEN_SCOPE_TYPES } from './constants';

export interface ITokenResponse {
  access_token: string;
  expires_in: number;
  refresh_token: string;
  scope: TOKEN_SCOPE_TYPES;
  token_type: string;
}

export interface IQuotesResponse {
  quotes: IQuote[];
  links: ILink[];
}

export interface ILink {
  href: string;
  rel: string;
}

export interface IQuote {
  fields: IField;
  links: ILink[];
  listingKey: string;
}

export interface IField {
  [name: string]: IFieldContent;
}

export interface IFieldContent {
  d: Date;
  dly?: number;
  gen?: number;
  v: number;
  z?: number;
}

export const FIELDS_NAMES: any = {
  LVAL_NORM: 'Last',
  CLOSE_ADJ_NORM: 'Close',
  NC2_PR_NORM: 'Day Change %',
  NC2_NORM: 'Day Change',
  VOL: 'Volumne',
  TUR: 'Turnover',
  PY_CLOSE: 'Previous year close',
  YTD_PR_NORM: 'YTD %',
};
