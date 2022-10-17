import {
  createLCDClient,
  WalletLCDClientConfig,
  WalletStates,
} from '@orbitium/wallet-types';
import { LCDClient } from 'orbitium.js';
import { OperatorFunction } from 'rxjs';
import { map } from 'rxjs/operators';

export function toLcdClient(
  lcdClientConfig?: WalletLCDClientConfig,
): OperatorFunction<WalletStates, LCDClient> {
  return map<WalletStates, LCDClient>((states) => {
    return createLCDClient({
      lcdClientConfig,
      network: states.network,
    });
  });
}
