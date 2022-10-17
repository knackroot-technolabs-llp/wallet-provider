import {
  createLCDClient,
  WalletLCDClientConfig,
} from '@orbitium/wallet-types';
import { LCDClient } from 'orbitium.js';
import { useMemo } from 'react';
import { useWallet } from './useWallet';

export function useLCDClient(
  lcdClientConfig?: WalletLCDClientConfig,
): LCDClient {
  const { network } = useWallet();

  return useMemo<LCDClient>(() => {
    return createLCDClient({ lcdClientConfig, network });
  }, [lcdClientConfig, network]);
}
