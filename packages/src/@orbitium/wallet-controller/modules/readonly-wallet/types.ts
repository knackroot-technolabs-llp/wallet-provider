import { NetworkInfo } from '@orbitium/wallet-types';

export interface ReadonlyWalletSession {
  network: NetworkInfo;
  terraAddress: string;
}
