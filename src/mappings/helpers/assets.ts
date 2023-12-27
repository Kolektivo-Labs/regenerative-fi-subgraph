// This file is automatically generated and contains assets from celo-alfajores.
// Generate for other networks by running: yarn generate-assets [network].
// Supported networks are: arbitrum, goerli, mainnet, and polygon.

import { Address } from '@graphprotocol/graph-ts';

class Assets {
  public stableAssets: Address[];
  public pricingAssets: Address[];
  public fxAssetAggregators: Address[][];
}

export const cUSD_ADDRESS = Address.fromString('0x4a4AC35B50DAf081C22856ebB26561F3a22598C6');
export const USDC_ADDRESS = Address.fromString('0x4a4AC35B50DAf081C22856ebB26561F3a22598C6');

export const assets: Assets = {
  stableAssets: [
    Address.fromString('0x4a4AC35B50DAf081C22856ebB26561F3a22598C6'), // cUSD
    Address.fromString('0x4a4AC35B50DAf081C22856ebB26561F3a22598C6'), // USDC
  ],
  pricingAssets: [
    Address.fromString('0x524d97a67f50f4a062c28c74f60703aec9028a94'), // WCELO
  ],
  fxAssetAggregators: [],
};
