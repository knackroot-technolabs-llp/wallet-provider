import { CreateTxOptions } from 'orbitium.js';
import { NetworkInfo, TxResult } from '@orbitium/wallet-types';

export interface WalletPlugin {
  name: string;
  type: string;
  icon: string;
  identifier: string;
  createSession: (
    networks: NetworkInfo[],
  ) => Promise<WalletPluginSession | null>;
}

export interface WalletPluginSession {
  network: NetworkInfo | null;
  terraAddress: string | null;
  connect: () => Promise<void>;
  disconnect: () => Promise<void>;
  getMetadata?: () => { [key: string]: any };

  post: (txn: CreateTxOptions) => Promise<TxResult>;
}
