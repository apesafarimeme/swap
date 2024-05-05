'use client';
import { http, createConfig,  createStorage, cookieStorage } from 'wagmi'
import { bsc, bscTestnet } from 'wagmi/chains'
import { injected, walletConnect } from 'wagmi/connectors'

const projectId = '538527642d9b02b5ba4e971d4c51cd22'
const metadata = {
  name: 'ApeSafariSwap',
  description: 'Version0 for version1 coin swap',
  url: 'https://swap.apesafari.club', // origin must match your domain & subdomain
  icons: ['']
}

export const config = createConfig({
  chains: [bsc, bscTestnet],
  connectors: [
    walletConnect({
      projectId: 'd9013e8c1fe2038673fba4017e8ca930',
    }),
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