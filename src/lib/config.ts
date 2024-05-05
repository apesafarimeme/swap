'use client';
import { http, createConfig,  createStorage, cookieStorage } from 'wagmi'
import { bsc, bscTestnet } from 'wagmi/chains'
import { metaMask } from 'wagmi/connectors'

// const projectId = ''

export const config = createConfig({
  chains: [bsc, bscTestnet],
  connectors: [
    metaMask(),
  ],
  ssr: true,
  storage: createStorage({
    storage: cookieStorage,
   }),
  transports: {
    [bsc.id]: http(),
    [bscTestnet.id]: http(),
  },
})