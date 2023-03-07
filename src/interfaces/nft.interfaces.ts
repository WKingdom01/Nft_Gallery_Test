export type CHAIN_TYPE = 'eth';

export interface ICollection {
  name: string;
  address: string;
  chain: CHAIN_TYPE;
}
